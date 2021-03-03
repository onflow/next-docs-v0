import React from "react";

import hydrate from "next-mdx-remote/hydrate";

import dynamic from "next/dynamic";

import xw from "xwind";

import { layoutFor } from "../layouts";
import Callout from "../components/Callout";
import Img from "../components/Img";
import generateGithubDocsPaths from "../lib/generatePaths";
import generateMDContent from "../lib/getMarkdown";

const components = {
  Img,
  Callout,
  pre: dynamic(() => import("../components/Pre")),
};

export default function MarkdownPage({ source, frontMatter }) {
  const content = hydrate(source, { components });
  const Layout = layoutFor(frontMatter.type);
  return (
    <Layout>
      <h1 css={xw`pt-12`}>{frontMatter.title || ""}</h1>
      {content}
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
