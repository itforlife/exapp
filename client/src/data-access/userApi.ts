import { IExappAPI } from '../../api/src/types/ExappAPI'
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

export class UserApi {
    private api: TypedAxiosInstance<IExappAPI>
    private authService: any
    constructor(api) {
        this.api = api
        // Create a real auth service and move it in a separate file
        this.authService = {
            signInWithEmailAndPassword() {
                return Promise.resolve()
            },
            createUserWithEmailAndPassword() {
                return Promise.resolve()
            },
        }
    }
    public signInWithEmailAndPassword = async (
        email: string,
        password: string
    ) => {
        const resp = await this.authService.signInWithEmailAndPassword(
            email,
            password
        )

        return resp
    }
    public createUserWithEmailAndPassword = async (
        payload: IAddUserPayload
    ) => {
        const { email, password, firstName, lastName } = payload
        const result = await this.authService.createUserWithEmailAndPassword(
            email,
            password
        )

        await this.addUserCollection({
            email,
            userId: result.user.uid,
            firstName,
            lastName,
            signInMethod: 'email',
        })
        this.api.post('/users', {
            firstName: 'x',
            lastName: 'y',
            age: 30,
        })
        return result
    }
    public getCurrentUser = async (userId: string) => {
        const currentUser = { firstName: 'test', lastName: 'test', age: 30 }
        return currentUser
    }

    public signInWithProvider = async (providerName: providerType) => {
        const result = await this.authService.signInWithPopup(providerName)
        return result
    }

    public addUserCollection = async (userInfo: IUserInfo) => {
        await this.api.post('/users', {
            firstName: userInfo.firstName,
            lastName: userInfo.lastName,
            age: 10,
        })
    }
    public signOut = async () => {
        await this.authService.signOut()
    }
    public get auth() {
        return this.authService
    }
}
