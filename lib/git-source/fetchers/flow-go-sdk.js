#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");
const octokit = require("../octokit").default;

function slugifyFile(filename) {
  return slugify(filename, {
    customReplacements: [
      [".mdx", " "],
      [".md", " "],
    ],
  });
}

async function getContent() {
  const response = await octokit.graphql(`
    fragment Files on GitObject{
      ... on Tree {
        entries {
          name
          path
          object {
            ... on Blob {
              text
            }
          }
        }
      }
    }

    query {
      docs: repository(owner: "onflow", name: "flow-go-sdk") {
        ... on Repository {
          object(expression: "master:docs/") {
            ... Files
          }
        }
      }

      readme: repository(owner: "onflow", name: "flow-go-sdk") {
        ... on Repository {
          object(expression: "master:README.md") {
            ... on Blob {
              text
            }
          }
        }
      }
    }
  `);

  const docs = response.docs.object.entries.map((l) => {
    return {
      content: l.object.text,
      path: slugifyFile(l.path.replace("docs/", "")),
    };
  });

  const readme = {
    constent: response.readme.object.text,
    path: "README",
  };

  let data = JSON.stringify({ docs, readme });
  fs.writeFileSync(
    path.resolve(__dirname, "../content/flow-go-sdk.json"),
    data
  );
}

getContent();
