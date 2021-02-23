import matter from "gray-matter";

import renderToString from "next-mdx-remote/render-to-string";

import fastGlob from "fast-glob";

import fs from "fs";

export default async function getMarkdown(params, components) {
  const currentPath = params.markdown.join("/");

  let source, filesPath;

  switch (true) {
    case currentPath.includes("cadence"):
      filesPath = await fastGlob([
        process.cwd(),
        "content/cadence/docs" +
          currentPath.replace("cadence", "") +
          ".{md, mdx}",
      ]);
      source = fs.readFileSync(filesPath[0]);
      break;
    case currentPath.includes("flow-go-sdk"):
      filesPath = await fastGlob([
        process.cwd(),
        "content/flow-go-sdk/docs" +
          currentPath.replace("flow-go-sdk", "") +
          ".{md, mdx}",
      ]);
      source = fs.readFileSync(filesPath[0]);
      break;
    default:
      filesPath = await fastGlob([
        process.cwd(),
        "content/pages/docs/content/" + currentPath + ".{md, mdx}",
      ]);
      source = fs.readFileSync(filesPath[0]);
  }

  const { content: mdContent, data } = matter(source);

  const mdxSource = await renderToString(mdContent, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
        // require("./remark-vscode-flow"),
      ],
    },
    scope: data,
  });

  return {
    mdxSource,
    data,
  };
  return {};
}
