import matter from "gray-matter";
import renderToString from "next-mdx-remote/render-to-string";
import find from "lodash/find";

export default async function getMarkdown(params, components) {
  const currentPath = params.markdown.join("/");

  let content, markdown;
  switch (true) {
    case currentPath.includes("cadence"):
      content = require("./content/cadence.json");
      markdown = find(content.language, ["path", currentPath]);
      if (!markdown) markdown = find(content.docs, ["path", currentPath]);

    case currentPath.includes("flow-go-sdk"):
      content = require("./content/flow-go-sdk.json");
  }

  const source = markdown.content;
  const { content: mdContent, data } = matter(source);

  const mdxSource = await renderToString(mdContent, {
    components,
    mdxOptions: {
      remarkPlugins: [
        require("remark-slug"),
        require("remark-autolink-headings"),
        require("../remark-vscode-flow"),
      ],
    },
    scope: data,
  });

  return {
    mdxSource,
    data,
  };
}
