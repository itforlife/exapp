
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
  @observable public userStore;
  public auth;
  public usersCollection;
  public profileInformationForm;
  constructor(config) {
    this.auth = config.auth;
    this.usersCollection = config.usersCollection;
    this.profileInformationForm = profileInformationForm;
    this.userStore = config.userStore;
    reaction(() => this.userStore.currentUser, (currentUser) => {
      const isFetching = currentUser.isLoading;
      const { data: userInfo } = currentUser;
        if(!isFetching && userInfo){
            this.currentUser = currentUser;
            this.initForm(userInfo);
        }
      }
    );    
  }

  public resetForm = () => {
    const userInfo = this.userStore.currentUser.data;
    this.initForm(userInfo);
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
  public updateUser = () => {
    return this.userStore.updateUserInformation({
      firstName: this.profileInformationForm.$('firstName').value,
      lastName: this.profileInformationForm.$('lastName').value,
      phoneNumber: this.profileInformationForm.$('phoneNumber').value,
      birthday: this.profileInformationForm.$('birthday').value

    })
  }
  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
  }
}
