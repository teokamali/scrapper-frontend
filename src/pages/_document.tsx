import { Head, Html, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html dir="rtl">
      <Head>
        <base href="/" />
        <meta charSet="utf-8" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
