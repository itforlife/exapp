
import { Document as FirestorterDocument } from 'firestorter'

import { computed, observable, reaction } from 'mobx';
import { profileInformationForm } from './ProfileInformationForm';


export interface IUserData {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: number;
  birthday: string;
}
export interface ICurrentUser {
  data: IUserData;
}

export class AccountDashboardStore {

  @observable public isLoading = false;
  @observable public currentUser: ICurrentUser;
  @observable public authenticationStore;
  public auth;
  public usersCollection;
  public profileInformationForm;
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
            this.initForm(userInfo);
        }
      }
    );    
  }


  public initForm = (userInfo) => {
    this.profileInformationForm.init({
      email: userInfo.email,
      firstName: userInfo.firstName,
      lastName: userInfo.lastName,
      phoneNumber: userInfo.phoneNumber,
      birthday: userInfo.birthday
    })
  }

  public updateUserCollection = async (userInfo) => {
      const userDoc = new FirestorterDocument(`users/${userInfo.userId}`);
      await userDoc.set(userInfo);
  }

  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
  }
}
