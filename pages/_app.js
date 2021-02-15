import React from "react";
import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";
import { DefaultSeo } from "next-seo";

import { ThemeProvider } from "../components/ThemeContext";
import "../global.css";

function App({ Component, pageProps }) {
  return (
    <>
      <Global styles={xw`XWIND_BASE XWIND_GLOBAL`} />
      <DefaultSeo
        title="Flow Documentation"
        description="docs.onflow.org"
        openGraph={{
          type: "website",
          locale: "en_IE",
          url: "https://docs.onflow.org/",
          site_name: "Flow Documentation",
        }}
        twitter={{
          handle: "@flow_blockchain",
          site: "https://onflow.org",
          cardType: "summary_large_image",
        }}
      />
      <Head>
        <meta
          name="viewport"
          content="minimum-scale=1, initial-scale=1, width=device-width, shrink-to-fit=no, user-scalable=no, viewport-fit=cover"
        />
        <link rel="stylesheet" href="https://rsms.me/inter/inter.css"></link>
        <link
          rel="stylesheet"
          href="https://overpass-30e2.kxcdn.com/overpass.css"
        ></link>
      </Head>
      <ThemeProvider>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default App;
