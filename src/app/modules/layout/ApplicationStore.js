import { CampaignsStore } from '../campaigns/campaignsStore'
import { AuthenticationStore } from '../authentication/authenticationStore'
import * as firebaseStore from '../../firebase'

class ApplicationStore {
  campaignsStore = null;
  authenticationStore = null;
  constructor() {
    const authenticationStoreConfig = {
      auth: firebaseStore.auth,
      facebookProvider: firebaseStore.facebookProvider,
      twitterProvider: firebaseStore.twitterProvider,
      usersCollection: firebaseStore.usersCollection
    }
    this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection)
    this.authenticationStore = new AuthenticationStore(
      authenticationStoreConfig
    )
  }
}
export default new ApplicationStore()
