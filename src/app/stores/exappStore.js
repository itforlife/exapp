import { CampaignsStore } from './campaignsStore';
import { AuthenticationStore } from './authenticationStore';
import * as firebaseStore from '../firebase';

class ExappStore {
    campaignsStore = null;
    authenticationStore = null;

    constructor() {
      this.campaignsStore = new CampaignsStore(firebaseStore.campaignsCollection);
      this.authenticationStore = new AuthenticationStore(firebaseStore.auth);
    }
}
export default new ExappStore();
