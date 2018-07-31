import { action, computed, observable } from 'mobx'
import { UserApi } from '../../data-access/userApi';
import { loginForm, registerForm } from './authenticationForm'

interface IFBProfile {
    first_name: string
    last_name: string
    birthday: string
}
interface ITwitterProfile {
    name: string
}

export class UserStore {
  @observable public isLoginFormActive = true;
  @observable public isRegisterFormActive = false;
  @observable public currentUser = null;
  @observable public errorMessage: string = '';
  public loginForm: typeof loginForm
  public registerForm: typeof registerForm
  private userApi: UserApi;
  constructor(config) {
    this.userApi = config.userApi;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.currentUser = null;
    this.waitForUser();
  }

    @action
    public setLoginFormActive = () => {
        this.isLoginFormActive = true
        this.isRegisterFormActive = false
    }

    @action
    public setRegisterFormActive = () => {
        this.isLoginFormActive = false
        this.isRegisterFormActive = true
    }

  @action
  public createUser = async () => {

    const payload = {
      email: this.registerForm.$('email').value,
      password:  this.registerForm.$('password').value,
      firstName: this.registerForm.$('firstName').value,
      lastName: this.registerForm.$('lastName').value
    }
    try {
      await this.userApi.createUserWithEmailAndPassword(payload);
      this.registerForm.clear()
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = error.message
    }
  }
  public signInFacebook = async () => {
      try {
          const result = await this.userApi.signInWithProvider('facebook');
          const profile = result.additionalUserInfo.profile as IFBProfile

          await this.addUserCollection(
              {
                  email: result.user.email,
                  userId: result.user.uid,
                  firstName: profile.first_name,
                  lastName: profile.last_name,
                  birthday: profile.birthday,
                  signInMethod: result.credential.signInMethod,
              },
              result.additionalUserInfo.isNewUser
          )
      } catch (error) {
          this.errorMessage = error.message
      }
  }

    public signInTwitter = async () => {
        try {
            const result = await this.userApi.signInWithProvider('twitter');
            const profile = result.additionalUserInfo.profile as ITwitterProfile
            await this.addUserCollection(
                {
                    userId: result.user.uid,
                    firstName: profile.name,
                    lastName: profile.name,
                    signInMethod: result.credential.signInMethod,
                },
                result.additionalUserInfo.isNewUser
            )
        } catch (error) {
          this.errorMessage = error.message
        }
    }

  @action
  public signInEmail = async () => {
    try {
      const userRepsonse = await this.userApi.signInWithEmailAndPassword(
        this.loginForm.$('email').value,
        this.loginForm.$('password').value
      )
      this.loginForm.clear()
      this.errorMessage = '';
      return userRepsonse;
    } catch (error) {
      this.errorMessage = error.message
    }
  }
  public addUserCollection = async (userInfo, isNewUser) => {
      if (isNewUser) {
        await this.userApi.addUserCollection(userInfo);
      }
  }
  public updateUserInformation = async (userInfo) => {
        await this.currentUser.update(userInfo)
  }
  @computed
  get userProfile() {
    return this.currentUser && this.currentUser.data
      ? this.currentUser.data
      : {}
  }

  @action
  public waitForUser = () => {
    this.userApi.auth.onAuthStateChanged(this.handleUserAuthChange);
  }

  public updateEmail = async (email: string, password: string) => {

    try {
          await this.userApi.signInWithEmailAndPassword(email, password);
          await this.currentUser.updateEmail(email);
    } catch (err) {
          return err.message;
    }

  }
  public updatePassword = async (password: string, newPassword: string) => {
   try{
        const response = await this.userApi.signInWithEmailAndPassword(this.userProfile.email, password);
        await response.user.updatePassword(newPassword);
   } catch(err) {
        return err.message;
   }

  }
  public signOut = async () => {
    await this.userApi.signOut();
  }
 
  @action
  private handleUserAuthChange = async (user) => {
    this.currentUser = user ? await this.userApi.getCurrentUser(user.uid) : null;
  }
}
