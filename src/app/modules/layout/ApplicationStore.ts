import * as firebaseStore from '../../data-access'
import { Api } from '../../data-access/api';
import { AccountDashboardStore } from '../account-dashboard/accountDashboardStore';
import { UserStore } from '../authentication/userStore'
import { CampaignsStore, CreateCampaignFormStore } from '../campaigns'

class ApplicationStore {
  public campaignsStore: CampaignsStore = null
  public userStore: UserStore = null
  public createCampaignFormStore: CreateCampaignFormStore = null
  public accountDashboardStore: AccountDashboardStore = null;
  public api: Api = null;
  constructor() {
    this.api = new Api();
  
    this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection)
    this.createCampaignFormStore = new CreateCampaignFormStore(
      firebaseStore.campaignsCollection
    )
    this.userStore = new UserStore({
      userApi: this.api.userApi
    })
    this.accountDashboardStore = new AccountDashboardStore(
      {
        userStore: this.userStore
      }
    )
  }
}
export default new ApplicationStore()
