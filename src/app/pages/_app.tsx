import App, { Container } from 'next/app'
import React from 'react'
import { CoreLayout } from '../modules/layout/CoreLayout'
import { LandingPageLayout } from '../modules/layout/LandingPageLayout'
import { observer } from 'mobx-react'
import { computed } from 'mobx'

@observer
export default class Exapp extends App {
  static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }
    // const defaultLocale = 'en_EN'
    // const validLocales = [defaultLocale, 'ro_RO']
    // const lng = 'ro_RO' || defaultLocale
    // const host =
    //   process.env.NODE_ENV !== 'production'
    //     ? 'http://localhost:3000'
    //     : 'https://exapp.io'
    // const resources = await getResources(lng, `${host}/static/i18n`)
    // console.log(resources)

    return { pageProps }
  }
  @computed
  get pageLayout() {
    // Add here funky logic to determine what layout to use
    return LandingPageLayout
  }
  render() {
    const { Component, pageProps } = this.props
    const PageLayout = this.pageLayout
    return (
      <Container>
        <CoreLayout>
          <PageLayout>
            <Component {...pageProps} />
          </PageLayout>
        </CoreLayout>
      </Container>
    )
  }
}
