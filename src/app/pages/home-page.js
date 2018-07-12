import React from 'react';
import { observer } from 'mobx-react';
import ExappStore from '../stores/exappStore';
import { Provider } from 'mobx-react';
import { CampaignsList } from '../components/campaigns';


const Component = observer((props) => {
  return (
    <div>
      <h1>Exapp.IO</h1>
      {props.authenticationStore.isUserLogedIn && <h2> hi {props.authenticationStore.userProfile.email}</h2>}
      <p>Empowering social good</p>
      <CampaignsList />
      <button onClick={props.authenticationStore.signOut}>Sign out </button>
    </div>
  )
})

class HomePage extends React.Component {
  componentDidMount() {
    const authenticationStore = ExappStore.authenticationStore;
    authenticationStore.auth.onAuthStateChanged((user) => {
      if (user) {
        authenticationStore.setAuthenticationUser({isUserLogedIn: true})

      } else {
        authenticationStore.setAuthenticationUser({isUserLogedIn: false})
      }
    });
  }
  render = () => {
    const { authenticationStore } = ExappStore;
    return (
        <Provider exappStore={ExappStore}>
          <div>
              <Component authenticationStore={authenticationStore}/>
          </div>
        </Provider>
    )
  } 
}

export default HomePage;