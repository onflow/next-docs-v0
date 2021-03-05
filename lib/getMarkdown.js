import matter from "gray-matter";

import renderToString from "next-mdx-remote/render-to-string";

import fromMarkdown from "mdast-util-from-markdown";

import TOC from "mdast-util-toc";

import fg from "fast-glob";

import fs from "fs";

import get from "lodash/get";

export default async function getMarkdown(params, components) {
  const currentPath = params.markdown.join("/");

  let source, filesPath;

  switch (true) {
    case currentPath.includes("cadence"):
      filesPath = await fg([
        process.cwd(),
        "content/cadence/docs/**" +
          currentPath.replace("cadence", "") +
          ".(md|mdx)",
      ]);
      source = fs.readFileSync(filesPath[0]);
      break;
    case currentPath.includes("flow-go-sdk"):
      filesPath = await fg([
        process.cwd(),
        "content/flow-go-sdk/docs/**" +
          currentPath.replace("flow-go-sdk", "") +
          ".(md|mdx)",
      ]);

      source = fs.readFileSync(filesPath[0]);
      break;
    case currentPath.includes("flow-js-sdk"):
      filesPath = await fg([
        process.cwd(),
        "content/flow-js-sdk/**" +
          currentPath.replace("flow-js-sdk", "") +
          ".(md|mdx)",
      ]);
      source = fs.readFileSync(filesPath[0]);
      break;
    default:
      filesPath = await fg([
        process.cwd(),
        "content/pages/docs/content/" + currentPath + ".(md|mdx)",
      ]);
      source = fs.readFileSync(filesPath[0]);
  }

  const { content: mdContent, data } = matter(source);
  const toc = TOC(fromMarkdown(mdContent));

  // NOTE: gets the relavent information we need to build the
  // table of contents from the mdast.
  // Not sure if this can be done differently?
  const parsedTOC = get(toc, "map.children").map((el) => ({
    title: get(el, "children[0].children[0].children[0].value"),
    url: get(el, "children[0].children[0].url"),
  }));

  const mdxSource = await renderToString(mdContent, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        // require("remark-autolink-headings"),
        // require("./remark-vscode-flow"),
      ],
    },
    scope: data,
  });

  return {
    mdxSource,
    data,
    toc: parsedTOC,
  };
}
