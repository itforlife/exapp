import { computed } from 'mobx'
import { observer } from 'mobx-react'
import App, { Container } from 'next/app'
import React from 'react'
import { CoreLayout } from '../modules/layout/CoreLayout'
import { LandingPageLayout } from '../modules/layout/LandingPageLayout'
import { AuthenticatedUserPageLayout } from '../modules/layout/AuthenticatedUserPageLayout'
import { observer } from 'mobx-react'
import { computed } from 'mobx'

@observer
export default class Exapp extends App {
  public static async getInitialProps({ Component, ctx }) {
    let pageProps = {}

    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps(ctx)
    }

    return { pageProps }
  }
  @computed
  get pageLayout() {
    // Add here funky logic to determine what layout to use
    const currentRoute = this.props.router.pathname;
    switch(currentRoute) {
      case '/': 
         return LandingPageLayout
      default: 
         return AuthenticatedUserPageLayout
    }
    
  }
  public render() {
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
