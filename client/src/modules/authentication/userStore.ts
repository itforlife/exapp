import { action, computed, observable, reaction } from 'mobx'
import { UserApi, IChangePassword } from '../../data-access/userApi';
import { loginForm, registerForm } from './authenticationForm'


export class UserStore {
  @observable public isLoginFormActive = true;
  @observable public isRegisterFormActive = false;
  @observable public currentUser = null;
  @observable public errorMessage: string = '';
  @observable public token: string;
  public loginForm: typeof loginForm
  public registerForm: typeof registerForm
  private userApi: UserApi;
  constructor(config) {
    this.userApi = config.userApi;
    this.loginForm = loginForm;
    this.registerForm = registerForm;
    this.currentUser = null;
    this.token = localStorage.getItem('token');
    this.getCurrentUser();
    reaction(() => this.token, (token) => {
      localStorage.setItem('token', token);
    })
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
      const response = await this.userApi.createUserWithEmailAndPassword(payload);
      this.token = response.data.token;
      await this.getCurrentUser();
      this.registerForm.clear()
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = error.message
    }
  }
  public signInFacebook = async () => {
      try {
          const response = await this.userApi.signInWithProvider('facebook');
          this.token = response.data.token;
          
          await this.getCurrentUser();

      } catch (error) {
          this.errorMessage = error.message
      }
  }

  @action
  public signInEmail = async () => {
    try {
      const response = await this.userApi.signInWithEmailAndPassword(
        this.loginForm.$('email').value,
        this.loginForm.$('password').value
      )
      this.token = response.data.token;
      await this.getCurrentUser();
      this.loginForm.clear()
      this.errorMessage = '';
    } catch (error) {
      this.errorMessage = error.message
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

  public updateEmail = async (email: string, password: string) => {

    try {
          await this.userApi.signInWithEmailAndPassword(email, password);
          await this.currentUser.updateEmail(email);
    } catch (err) {
          return err.message;
    }

  }
  public updatePassword = async (payload: IChangePassword) => {
   try{
        await this.userApi.updateUserPassword(payload);
   } catch(err) {
        return err.message;
   }

  }
  public signOut = async () => {
    await this.userApi.signOut();
  }
 
  @action
  private getCurrentUser = async () => {
    this.currentUser = this.token ? await this.userApi.getCurrentUser(this.token) : null;
  }
}
