import * as firebaseStore from '../../firebase'
import { AccountDashboardStore } from '../account-dashboard/accountDashboardStore';
import { UserStore } from '../authentication/userStore'
import { CampaignsStore, CreateCampaignFormStore } from '../campaigns'


class ApplicationStore {
  public campaignsStore: CampaignsStore = null
  public userStore: UserStore = null
  public createCampaignFormStore: CreateCampaignFormStore = null
  public accountDashboardStore: AccountDashboardStore = null;

  constructor() {
    const userStoreConfig = {
      auth: firebaseStore.auth,
      facebookProvider: firebaseStore.facebookProvider,
      twitterProvider: firebaseStore.twitterProvider,
      usersCollection: firebaseStore.usersCollection,
    }
    this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection)
    this.createCampaignFormStore = new CreateCampaignFormStore(
      firebaseStore.campaignsCollection
    )
    this.userStore = new UserStore(
      userStoreConfig
    )
    this.accountDashboardStore = new AccountDashboardStore(
      {
        auth: firebaseStore.auth,
        usersCollection: firebaseStore.usersCollection,
        userStore: this.userStore
      }
    )
  }
}
export default new ApplicationStore()
