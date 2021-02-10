import React from "react";
import xw from "xwind";
import Head from "next/head";
import { MDXProvider } from "@mdx-js/react";

import CodeFencePre from "../components/Pre";

const Layout = ({ children, frontMatter }) => {
  return (
    <>
      <Head>
        <title>
          {frontMatter ? `${frontMatter.title} -` : ""} Flow Documentation
        </title>
      </Head>
      <div
        id="app"
        css={xw`prose-sm md:prose lg:prose-lg min-h-screen container mx-auto bg-white dark:bg-black dark:text-white`}
      >
        <MDXProvider
          components={{
            pre: CodeFencePre,
          }}
        >
          {children}
        </MDXProvider>
      </div>
    </>
  );
};

export default Layout;
