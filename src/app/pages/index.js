import React from 'react'
import { observer, inject } from 'mobx-react'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { withRouter } from 'next/router'
import { Button } from '../modules/elements'
import '../static/assets/css/fonts.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { indexStyles } from './index.css'
@inject('appStore')
@observer
class LandingPage extends React.Component {
  constructor(props) {
    super(props)
  }
  render = () => {
    const authenticationStore = this.props.appStore
    return (
      <div className="landing-page">
        <div className="content-bg-wrap">
          <div className="header-spacer--standard" />
          <div className="container">
            <div className="row display-flex">
              <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                <div className="landing-content">
                  <h1>Exapp - The social good network</h1>
                  <Button
                    className="btn btn-md btn-border c-white"
                    onClick={authenticationStore.setRegisterFormActive}
                  >
                    Join us!
                  </Button>
                </div>
              </div>
            </div>
            <AuthenticationComponent />
          </div>
        </div>
        <style jsx>{indexStyles}</style>
      </div>
    )
  }
}

export default withRouter(LandingPage)
