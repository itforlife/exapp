import { CampaignsStore } from './campaignsStore';
import { AuthenticationStore } from './authenticationStore';
import * as firebaseStore from '../firebase';

class ExappStore {
    campaignsStore = null;
    authenticationStore = null;

    constructor() {
      const authenticationStoreConfig = {
        auth: firebaseStore.auth,
        facebookProvider: firebaseStore.facebookProvider,
        twitterProvider: firebaseStore.twitterProvider
      }
      this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection);
      this.authenticationStore = new AuthenticationStore(authenticationStoreConfig);
    }
}
export default new ExappStore();
