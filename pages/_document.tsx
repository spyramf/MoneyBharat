import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <link
          rel="icon"
          type="image/png"
          sizes="32x32"
          href="/images/brand/money-bharat-icon.png"
        />
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/images/brand/money-bharat-icon.png"
        />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
