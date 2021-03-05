import React from "react";

import hydrate from "next-mdx-remote/hydrate";

import dynamic from "next/dynamic";

import xw from "xwind";

import { layoutFor } from "../layouts";
import Callout from "../components/Callout";
import Img from "../components/Img";
import SectionHeading from "../components/SectionHeading";
import generateGithubDocsPaths from "../lib/generatePaths";
import generateMDContent from "../lib/getMarkdown";

const components = {
  Img,
  Callout,
  pre: dynamic(() => import("../components/Pre")),
  h2: SectionHeading,
};

export default function MarkdownPage({ source, frontMatter, toc }) {
  const content = hydrate(source, { components });
  const Layout = layoutFor(frontMatter.contentType);

  return (
    <Layout toc={toc}>
      <h1>{frontMatter.title || ""}</h1>
      {content}
    </Layout>
  );
}

export const getStaticProps = async ({ params }) => {
  const { mdxSource, data, toc } = await generateMDContent(params, components);
  return {
    props: {
      source: mdxSource,
      frontMatter: data,
      toc,
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
