import { CampaignsStore, CreateCampaignFormStore } from '../campaigns/'
import { AuthenticationStore } from '../authentication/authenticationStore'
import * as firebaseStore from '../../firebase'

class ApplicationStore {
  campaignsStore = null
  authenticationStore = null
  constructor() {
    const authenticationStoreConfig = {
      auth: firebaseStore.auth,
      facebookProvider: firebaseStore.facebookProvider,
      twitterProvider: firebaseStore.twitterProvider,
      usersCollection: firebaseStore.usersCollection,
    }
    this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection)
    this.createCampaignFormStore = new CreateCampaignFormStore(
      firebaseStore.campaignsCollection
    )
    this.authenticationStore = new AuthenticationStore(
      authenticationStoreConfig
    )
  }
}
export default new ApplicationStore()
