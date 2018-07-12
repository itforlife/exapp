import React from 'react'
import { observer } from 'mobx-react'
import ExappStore from '../stores/exappStore'
import { Provider } from 'mobx-react'
import { AuthenticationComponent } from '../components/authentication/authenticationComponent'

import '../assets/css/fonts.min.css'
import '../assets/css/main.css'
import 'bootstrap/dist/css/bootstrap-reboot.css'
import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/css/bootstrap-grid.css'

@observer
class LandingPage extends React.Component {
  constructor(props) {
    super(props)
    this.exappStore = ExappStore
  }

  componentDidMount() {
    const authenticationStore = ExappStore.authenticationStore
    authenticationStore.auth.onAuthStateChanged(user => {
      if (user) {
        authenticationStore.setAuthenticationUser({ isUserLogedIn: true })
      } else {
        authenticationStore.setAuthenticationUser({ isUserLogedIn: false })
      }
    })
  }
  render = () => {
    const authenticationStore = this.exappStore.authenticationStore
    return (
      <Provider exappStore={this.exappStore}>
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
        </div>
      </Provider>
    )
  }
}

export default LandingPage
