#!/usr/bin/env node
const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");
const octokit = require("../../octokit").default;

function slugifyPath(path) {
  const p = path.split("/").slice(0, -1).join("/");
  const filename = path.split("/").pop();
  return (
    p +
    "/" +
    slugify(filename, {
      customReplacements: [
        [".md", " "],
        [".mdx", " "],
      ],
    })
  );
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
      docs: repository(owner: "onflow", name: "cadence") {
        ... on Repository {
          object(expression: "master:docs/") {
            ... Files
          }
        }
      }
    language: repository(owner: "onflow", name: "cadence") {
        ... on Repository {
          object(expression: "master:docs/language") {
            ...Files
          }
        }
      }
    }
  `);

  const language = response.language.object.entries.map((l) => {
    return {
      content: l.object.text,
      path: slugifyPath(l.path.replace("docs/", "")),
    };
  });
  const docs = response.docs.object.entries.map((l) => {
    return {
      content: l.object.text,
      path: slugifyPath(l.path.replace("docs/", "")),
    };
  });

  let data = JSON.stringify({ language, docs });
  fs.writeFileSync(path.resolve(__dirname, "../cadence-docs.json"), data);
}

getContent();
