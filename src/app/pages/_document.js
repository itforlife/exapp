import Document, { Head, Main, NextScript } from 'next/document'
import { Footer, Header } from '../modules/layout'

export default class MyDocument extends Document {
  render() {
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          <Header />
          <Main />
          <Footer />
          <NextScript />
        </body>
      </html>
    )
  }
}
