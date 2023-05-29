import React from "react";
import Document, { Html, Head, Main, NextScript } from "next/document";

export default function _document() {
  return (
    <Html>
      <Head>
        <link rel="manifest" href="/manifest.json" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
