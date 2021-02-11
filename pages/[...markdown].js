import React from "react";
import xw from "xwind";
import hydrate from "next-mdx-remote/hydrate";
import dynamic from "next/dynamic";

import generateGithubDocsPaths from "../lib/git-source/generatePaths";
import generateMDContent from "../lib/git-source/getMarkdown";

import Layout from "../layouts/default";

const components = {
  pre: dynamic(() => import("../components/Pre")),
};

export default function MarkdownPage({ source }) {
  const content = hydrate(source, { components });
  return (
    <Layout>
      <div
        css={xw`overflow-auto prose-override dark[prose-override prose-light]`}
      >
        {content}
      </div>
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data } = await generateMDContent(params, components);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const githubDocsPaths = generateGithubDocsPaths();
  return {
    paths: [...githubDocsPaths],
    fallback: false,
  };
};
