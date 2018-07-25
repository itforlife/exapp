import * as firebaseStore from '../../firebase'
import { AuthenticationStore } from '../authentication/authenticationStore'
import { CampaignsStore, CreateCampaignFormStore } from '../campaigns'

class ApplicationStore {
    public campaignsStore: CampaignsStore = null
    public authenticationStore: AuthenticationStore = null
    public createCampaignFormStore: CreateCampaignFormStore = null
    constructor() {
        const authenticationStoreConfig = {
            auth: firebaseStore.auth,
            facebookProvider: firebaseStore.facebookProvider,
            twitterProvider: firebaseStore.twitterProvider,
            usersCollection: firebaseStore.usersCollection,
        }
        this.campaignsStore = new CampaignsStore(
            firebaseStore.campaignsCollection
        )
        this.createCampaignFormStore = new CreateCampaignFormStore(
            firebaseStore.campaignsCollection
        )
        this.authenticationStore = new AuthenticationStore(
            authenticationStoreConfig
        )
    }
}
export default new ApplicationStore()
