import React from "react";
import matter from "gray-matter";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import dynamic from "next/dynamic";
import Link from "next/link";
import VSCodeFlow from "../../lib/remark-vscode-flow";

const components = {
  pre: dynamic(() => import("../../components/Pre")),
};

export default function PostPage({ source, frontMatter }) {
  const content = hydrate(source, { components });
  return (
    <>
      <header>
        <nav>
          <Link href="/">
            <a>👈 Go back home</a>
          </Link>
        </nav>
      </header>
      <div className="post-header">
        <h1>{frontMatter.title}</h1>
        {frontMatter.description && (
          <p className="description">{frontMatter.description}</p>
        )}
      </div>
      <main>{content}</main>
    </>
  );
}

export const getStaticProps = async ({ params }) => {
  const json = require("../../lib/git-content-source/cadence-docs.json");
  const content = JSON.parse(JSON.stringify(json));

  const source = "# Hello There";

  const { content: mdContent, data } = matter(source);

  const mdxSource = await renderToString(mdContent, {
    components,
    mdxOptions: {
      remarkPlugins: [VSCodeFlow],
    },
    scope: data,
  });

  return {
    props: {
      source: mdxSource,
      frontMatter: data,
    },
  };
};

export const getStaticPaths = async () => {
  const json = require("../../lib/git-content-source/cadence-docs.json");
  const content = JSON.parse(JSON.stringify(json));

  const languagePages = content.language.map((p) => {
    return {
      params: { page: p.path.split("/") },
    };
  });

  const rootPages = content.root.map((p) => {
    return {
      params: { page: p.path.split("/") },
    };
  });

  return {
    paths: [...rootPages, ...languagePages],
    fallback: false,
  };
};
