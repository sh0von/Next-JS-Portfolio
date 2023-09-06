import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <Html lang="en">
        <Head>
          <meta property="og:title" content="It's me Shovon" />
          <meta property="og:description" content="It's me Shovon" />
          <meta property="og:image" content="/fav.png" />
          <meta property="og:url" content="https://facebook.com/minar.svn" />
          <meta name="twitter:title" content="It's me Shovon" />
          <meta name="twitter:description" content="It's me Shovon" />
          <meta name="twitter:image" content="/fav.png" />
          <meta name="twitter:card" content="/fav.png" />

          <link
            rel="stylesheet"
            href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;700&display=swap"
          />

          <link rel="icon" href="/fav.png" />

          <title>It's me Shovon</title>

          <meta name="description" content="It's me Shovon" />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
