import Document, { Head, Main, NextScript } from 'next/document'
import { Footer, Header } from '../modules/layout'
import ExappStore from '../stores/exappStore'

export default class MyDocument extends Document {
  render() {
    const authenticationStore = ExappStore.authenticationStore;
    return (
      <html>
        <Head>
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <link rel="stylesheet" href="/_next/static/style.css" />
        </Head>
        <body>
          {authenticationStore.isUserLogedIn && <Header />}
          <Main />
          {authenticationStore.isUserLogedIn && <Footer />}
          <NextScript />
        </body>
      </html>
    )
  }
}
