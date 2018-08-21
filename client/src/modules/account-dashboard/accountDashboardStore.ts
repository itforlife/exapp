
import { action, computed, observable, reaction } from 'mobx';
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

export type settingsComponentType = 'personalInformation' | 'changePassword';

export class AccountDashboardStore {

  @observable public isLoading = false;
  @observable public currentUser: ICurrentUser;
  @observable public userStore;
  @observable public passwordError: string = null;
  @observable public settingsComponent: settingsComponentType = 'personalInformation';
  public profileInformationForm;
  constructor(config) {
    this.profileInformationForm = profileInformationForm;
    this.userStore = config.userStore;
    this.initForm({
      email: null,
      firstName: null,
      lastName: null,
      phoneNumber: null,
      birthday: null, 
      password: null, 
      newPassword: null, 
      confirmPassword: null
    })
    reaction(() => this.userStore.currentUser, (currentUser) => {
      const { data: userInfo } = currentUser;
        if(userInfo){
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
      birthday: userInfo.birthday, 
      password: null, 
      newPassword: null, 
      confirmPassword: null
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

  @action 
  public changeSettingsComponent = (componentName: settingsComponentType) => {
    this.settingsComponent = componentName;
  }

  @action
  public changePassword = () => {
    const password = this.profileInformationForm.$('password').value;
    const newPassword = this.profileInformationForm.$('newPassword').value;
    const email = this.profileInformationForm.$('email').value;
    const confirmPassword = this.profileInformationForm.$('newPassword').value;
    if(confirmPassword !== newPassword) {
      this.passwordError = 'The password dose not match';
    }

    return this.userStore.updatePassword({password, email, newPassword});
  }
  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data ? this.currentUser.data : {};
  }
}
