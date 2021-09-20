import Document, { Html, Head, Main, NextScript } from 'next/document';

class MyDocument extends Document {
    render() {
        return (
          <Html>
            <Head> 
              <link rel="shortcut icon" href="/favicon.ico"/>
              <link href="https://fonts.googleapis.com/css2?family=Maven+Pro:wght@400;500;600;800&display=swap" rel="stylesheet"/>
              <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
            </Head>
            <body>
              <Main />
              <NextScript />
            </body>
          </Html>
        )
      }
};

export default MyDocument;