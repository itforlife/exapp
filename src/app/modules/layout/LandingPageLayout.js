import { Footer, Header } from './index'

export const LandingPageLayout = props => (
  <div>
    <Header />
    {props.children}
    <Footer />
  </div>
)
