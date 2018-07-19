import React from 'react'
import { observer } from 'mobx-react'
import AppStore from '../modules/layout/ApplicationStore'
import { Provider } from 'mobx-react'
import { CampaignsList } from '../modules/campaigns/campaigns'
import { withRouter } from 'next/router'

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
      <CampaignsList />
      <button onClick={props.onSignOut}>Sign out </button>
    </div>
  )
})

class HomePage extends React.Component {
  onSignOut = async () => {
    await AppStore.authenticationStore.signOut();
    this.props.router.push('/')
  }

  render = () => {
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
