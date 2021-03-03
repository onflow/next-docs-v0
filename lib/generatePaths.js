const fg = require("fast-glob");
const fs = require("fs");
const path = require("path");
const slugify = require("@sindresorhus/slugify");

const cadencePages = fg.sync(
  path.resolve(process.cwd(), `content/cadence/docs/**/*.(md|mdx)`)
);
const goSDKPages = fg.sync(
  path.resolve(process.cwd(), `content/flow-go-sdk/docs/**/*.(md|mdx)`)
);
const jsSDKPages = fg.sync(
  path.resolve(process.cwd(), `content/flow-js-sdk/**/*.(md|mdx)`)
);
const contentPages = fg.sync(
  path.resolve(process.cwd(), `content/pages/docs/content/**/*.(md|mdx)`)
);

const contentPaths = contentPages.map((p) => {
  const path = p
    .replace(`${process.cwd()}/content/pages/docs/content`, "")
    .replace(/(.md|.mdx)$/, "");

  return {
    params: {
      markdown: [...path.split("/").filter((empty) => empty)],
    },
  };
});

const cadencePaths = cadencePages.map((p) => {
  const path = p
    .replace(`${process.cwd()}/content/cadence/docs`, "")
    .replace(/(.md|.mdx)$/, "");

  const cadencePath = "cadence".concat(path);

  return {
    params: {
      markdown: [...cadencePath.split("/").filter((empty) => empty)],
    },
  };
});

const goSDKPaths = goSDKPages.map((p) => {
  const path = p
    .replace(`${process.cwd()}/content/flow-go-sdk/docs`, "")
    .replace(/(.md|.mdx)$/, "");

  const goSDKPath = "flow-go-sdk".concat(path);

  return {
    params: {
      markdown: [...goSDKPath.split("/").filter((empty) => empty)],
    },
  };
});

const jsSDKPaths = jsSDKPages.map((p) => {
  const path = p
    .replace(`${process.cwd()}/content/flow-js-sdk/docs`, "")
    .replace(`${process.cwd()}/content/flow-js-sdk/packages`, "/packages")
    .replace(/(.md|.mdx)$/, "");

  const goSDKPath = "flow-js-sdk".concat(path);

  return {
    params: {
      markdown: [...goSDKPath.split("/").filter((empty) => empty)],
    },
  };
});

const paths = [...cadencePaths, ...goSDKPaths, ...jsSDKPaths, ...contentPaths];

if (process.env.NODE_ENV !== "production") {
  console.log("Writing sitemap...");
  fs.writeFileSync(
    path.resolve(process.cwd(), "sitemap.json"),
    JSON.stringify(
      paths.map((p) => p.params.markdown.join("/")),
      null,
      2
    )
  );
}

export default function generatePaths() {
  return paths;
}
