import * as firebaseStore from '../../firebase'
import { AccountDashboardStore } from '../account-dashboard/accountDashboardStore';
import { AuthenticationStore } from '../authentication/authenticationStore'
import { CampaignsStore, CreateCampaignFormStore } from '../campaigns'


class ApplicationStore {
  public campaignsStore: CampaignsStore = null
  public authenticationStore: AuthenticationStore = null
  public createCampaignFormStore: CreateCampaignFormStore = null
  public accountDashboardStore: AccountDashboardStore = null;

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
    this.accountDashboardStore = new AccountDashboardStore(
      {
        auth: firebaseStore.auth,
        usersCollection: firebaseStore.usersCollection,
        authenticationStore: this.authenticationStore
      }
    )
  }
}
export default new ApplicationStore()
