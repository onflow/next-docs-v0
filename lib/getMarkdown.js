import matter from "gray-matter";

import renderToString from "next-mdx-remote/render-to-string";

import path from "path";

import fs from "fs";

export default async function getMarkdown(params, components) {
  const currentPath = params.markdown.join("/");

  let source, filesPath;

  switch (true) {
    case currentPath.includes("cadence"):
      filesPath = path.resolve(
        process.cwd(),
        "content/cadence/docs" + currentPath.replace("cadence", "") + ".md"
      );
      source = fs.readFileSync(filesPath);
      break;
    case currentPath.includes("flow-go-sdk"):
      filesPath = path.resolve(
        process.cwd(),
        "content/flow-go-sdk/docs" + currentPath.replace("cadence", "") + ".mdx"
      );
      source = fs.readFileSync(filesPath);
      break;
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
