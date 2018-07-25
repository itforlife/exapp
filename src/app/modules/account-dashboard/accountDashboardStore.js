import { observable, action, computed, reaction } from 'mobx';
import { profileInformationForm } from '../elements/form/forms';


export class AccountDashboardStore {

  @observable isLoading = false;
  @observable currentUser = {};
  @observable authenticationStore = null;
  @observable profileInformationForm;
  constructor(config) {
    this.auth = config.auth;
    this.usersCollection = config.usersCollection;
    this.profileInformationForm = profileInformationForm;
    this.authenticationStore = config.authenticationStore;
   
    reaction(() => this.authenticationStore.currentUser, (currentUser) => {
      const isFetching = currentUser.isLoading;
      const { data: userInfo } = currentUser;
        if(!isFetching && userInfo){
            this.currentUser = currentUser;
            this.profileInformationForm.init({
              email: userInfo.email,
              firstName: userInfo.firstName,
              lastName: userInfo.lastName,
              phoneNumber: userInfo.phoneNumber,
              birthday: userInfo.birthday
            })
        }
      }
    );    
  }


  updateUserCollection = async (userInfo) => {
      const userDoc = new Document(`users/${userInfo.userId}`);
      await userDoc.set(userInfo);
  }

  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
  }

  signOut = async () => {
    await this.auth.signOut();
  }
}
