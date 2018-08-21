import { IExappAPI } from '../../../api/src/types/ExappAPI'
import { TypedAxiosInstance } from './typed-axios'

export interface IUserInfo {
    email?: string
    userId: string
    firstName?: string
    lastName?: string
    birthday?: string
    signInMethod: string
}

export interface IAddUserPayload {
    email: string
    password: string
    firstName: string
    lastName: string
}
export type providerType = 'facebook' | 'twitter'
export interface IChangePassword {
    email: string;
    password: string;
    newPassword: string
  }
export class UserApi {
    private api: TypedAxiosInstance<IExappAPI>
    private authService: any
    constructor(api: TypedAxiosInstance<IExappAPI>) {
        this.api = api;
    }
    public signInWithEmailAndPassword = async (
        email: string,
        password: string
    ) => {
        return this.api.post('/auth/local', {
            email,
            password
        });
    }
    public createUserWithEmailAndPassword = async (
        payload: IAddUserPayload
    ) => {
        const { email, password, firstName, lastName } = payload
        return this.api.post('/auth/register', {
            firstName,
            lastName,
            age: 30,
            email,
            password
        })
    }

    public updateUserPassword = async (
       payload: IChangePassword
    ) => {
        return this.api.post('/auth/reset', payload);
    }

    public getCurrentUser = async (token: string) => {
        return this.api.get('/users/me',{ headers: {authorization: token}})
    }

    public signInWithProvider = async (providerName: providerType) => {
        const result = await this.authService.signInWithPopup(providerName)
        return result
    }

    public signOut = async () => {
        await this.authService.signOut()
    }
    public get auth() {
        return this.authService
    }
}
