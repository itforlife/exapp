import React from 'react'
import { observer } from 'mobx-react'
import ExappStore from '../stores/exappStore'
import { Provider } from 'mobx-react'
import { AuthenticationComponent } from '../modules/authentication/authenticationComponent'
import { withRouter } from 'next/router'

import '../assets/css/fonts.min.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'
import { indexStyles } from './index.css';

@observer
class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.exappStore = ExappStore
  }

  render = () => {
    const authenticationStore = this.exappStore.authenticationStore;
    return (
      <Provider exappStore={this.exappStore} router={this.props.router}>
        <div className="landing-page">
          <div className="content-bg-wrap">
            <div className="header-spacer--standard" />
            <div className="container">
              <div className="row display-flex">
                <div className="col col-xl-6 col-lg-6 col-md-12 col-sm-12 col-12">
                  <div className="landing-content">
                    <h1>Exapp - The social good network</h1>
                    <a
                      className="btn btn-md btn-border c-white"
                      onClick={authenticationStore.setRegisterFormActive}
                    >
                      Join us!
                    </a>
                  </div>
                </div>
                <AuthenticationComponent />
              </div>
            </div>
          </div>
          <style jsx>{indexStyles}</style>
        </div>
      </Provider>
    )
  }
}

export default withRouter(LandingPage)
