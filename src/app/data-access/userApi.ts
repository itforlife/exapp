import { Document as FirestorterDocument } from 'firestorter'
import { IExappAPI } from '../../api/src/types/ExappAPI'
import { auth, providers } from './'
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
    constructor(api) {
        this.api = api
    }
    public signInWithEmailAndPassword = async (
        email: string,
        password: string
    ) => {
        const resp = await auth.signInWithEmailAndPassword(email, password)

        return resp
    }
    public createUserWithEmailAndPassword = async (
        payload: IAddUserPayload
    ) => {
        const { email, password, firstName, lastName } = payload
        const result = await auth.createUserWithEmailAndPassword(
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
        return result
    }
    public getCurrentUser = async (userId: string) => {
        const currentUser = new FirestorterDocument(`users/${userId}`)
        currentUser.fetch()
        await currentUser.ready()
        return currentUser
    }

    public signInWithProvider = async (providerName: providerType) => {
        const result = await auth.signInWithPopup(providers[providerName])
        return result
    }

    public addUserCollection = async (userInfo: IUserInfo) => {
        const userDoc = new FirestorterDocument(`users/${userInfo.userId}`)
        await userDoc.set(userInfo)
        await this.api.post('/users', {
            firstName: userDoc.data.firstName,
            lastName: userDoc.data.lastName,
            age: 10,
        })
    }
    public signOut = async () => {
        await auth.signOut()
    }
    public get auth() {
        return auth
    }
}
