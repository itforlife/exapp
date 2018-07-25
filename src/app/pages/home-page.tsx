import React from 'react'
import { observer } from 'mobx-react'
import AppStore from '../modules/layout/ApplicationStore'
import { Provider } from 'mobx-react'
import { withRouter, RouterProps } from 'next/router'
import { InjectedTranslateProps } from 'react-i18next'
import ApplicationStore from '../modules/layout/ApplicationStore'

interface IInjectedProps extends InjectedTranslateProps {
  appStore: typeof ApplicationStore
  router: RouterProps
}

const Component = observer(props => {
  return (
    <div>
      <h1>Exapp.IO</h1>
      {props.authenticationStore.isUserLogedIn && (
        <div>
          <h2> hi {props.authenticationStore.userProfile.email}</h2>
          <h2> hi {props.authenticationStore.userProfile.firstName}</h2>
        </div>
      )}
      <p>Empowering social good</p>
      <button onClick={props.onSignOut}>Sign out </button>
    </div>
  )
})

class HomePage extends React.Component {
  constructor(props) {
    super(props)
  }
  get injectedProps() {
    return this.props as IInjectedProps
  }
  onSignOut = async () => {
    await AppStore.authenticationStore.signOut()
    this.injectedProps.router.push('/')
  }

  render() {
    const { authenticationStore } = AppStore
    return (
      <Provider appStore={AppStore}>
        <div>
          <Component
            authenticationStore={authenticationStore}
            onSignOut={this.onSignOut}
          />
        </div>
      </Provider>
    )
  }
}

export default withRouter(HomePage)
