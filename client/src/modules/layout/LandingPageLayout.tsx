import * as React from 'react'
import { Footer, Header } from '.'

export const LandingPageLayout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)
