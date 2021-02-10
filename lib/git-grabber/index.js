#!/usr/bin/env node

const path = require("path");
const rimraf = require("rimraf");
const util = require("util");
const Git = require("simple-git/promise");
const fastGlob = require("fast-glob");
const fs = require("fs");
const GitUrlParse = require("git-url-parse");
const mv = require("mv");
const ora = require("ora");

const pmv = util.promisify(mv);
const spinner = ora();

const gits = [
  {
    remote: "https://github.com/onflow/cadence.git",
    branch: "master",
    localPath: path.resolve(__dirname, ".tmp/cadence"),
    patterns: "docs/language/**/*.{md,mdx}",
  },
  {
    branch: `master`,
    remote: "https://github.com/onflow/flow-go-sdk.git",
    localPath: path.resolve(__dirname, ".tmp/flow-go-sdk"),
    patterns: ["docs/**/*.{md,mdx}", "examples/**/*.{md,mdx}"],
  },
  {
    branch: `master`,
    remote: "https://github.com/onflow/flow-js-sdk.git",
    localPath: path.resolve(__dirname, ".tmp/flow-js-sdk"),
    patterns: [
      "docs/**/*.{md, mdx}",
      "packages/fcl/**/*.{md,mdx}",
      "packages/types/**/*.{md,mdx}",
      "packages/fcl-react/**/*.{md,mdx}",
    ],
  },
];

const grabber = async ({ localPath, remote, branch, patterns }) => {
  async function isAlreadyCloned(remote, path) {
    const existingRemote = await Git(path).listRemote(["--get-url"]);
    return existingRemote.trim() == remote.trim();
  }

  async function getTargetBranch(repo, branch) {
    if (typeof branch == `string`) {
      return `origin/${branch}`;
    } else {
      return repo
        .raw(["symbolic-ref", "--short", "refs/remotes/origin/HEAD"])
        .then((result) => result.trim());
    }
  }

  async function getRepo(path, remote, branch) {
    spinner.start(`Fetching docs from ${remote}`);
    // If the directory doesn't exist or is empty, clone. This will be the case if
    // our config has changed because Gatsby trashes the cache dir automatically
    // in that case.
    if (!fs.existsSync(path) || fs.readdirSync(path).length === 0) {
      let opts = [`--depth`, `1`];
      if (typeof branch == `string`) {
        opts.push(`--branch`, branch);
      }
      await Git().clone(remote, path, opts);
      return Git(path);
    } else if (await isAlreadyCloned(remote, path)) {
      const repo = await Git(path);
      const target = await getTargetBranch(repo, branch);
      // Refresh our shallow clone with the latest commit.
      await repo
        .fetch([`--depth`, `1`])
        .then(() => repo.reset([`--hard`, target]));
      return repo;
    } else {
      throw new Error(`Can't clone to target destination: ${localPath}`);
    }
  }

  const parsedRemote = GitUrlParse(remote);

  let repo;
  try {
    repo = await getRepo(localPath, remote, branch);
    spinner.succeed(`Docs added from: ${remote}`);
  } catch (e) {
    return console.error(e);
  }

  parsedRemote.git_suffix = false;
  parsedRemote.webLink = parsedRemote.toString("https");

  delete parsedRemote.git_suffix;
  let ref = await repo.raw(["rev-parse", "--abbrev-ref", "HEAD"]);
  parsedRemote.ref = ref.trim();

  const repoFiles = await fastGlob(patterns, {
    cwd: localPath,
    absolute: true,
  });

  const createAndProcessNode = async (filePath) => {
    const fileName = filePath.split(".tmp")[1];
    return pmv(
      filePath,
      path.resolve(__dirname, "../../pages/" + fileName.replace("/docs/", "/")),
      {
        mkdirp: true,
        clobber: true,
      }
    );
  };

  return Promise.all(repoFiles.map(createAndProcessNode));
};

Promise.all(gits.map(grabber))
  .then(() => {
    rimraf.sync(path.resolve(__dirname, ".tmp"));
    spinner.succeed("Got the gits.");
  })
  .catch((e) => {
    spinner.fail("Could not get the gits.");
    console.log(e);
  });
