import React from "react";
import Head from "next/head";
import { Global } from "@emotion/react";
import xw from "xwind";
import { DefaultSeo } from "next-seo";

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
      </Head>
      <Component {...pageProps} />
    </>
  );
}

export default App;
