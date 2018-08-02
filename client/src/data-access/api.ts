import { IExappAPI } from '../../../api/src/types/ExappAPI'
import axios from './typed-axios'
import { UserApi } from './userApi'

const api = axios.create<IExappAPI>({
    baseURL: 'localhost:5000',
})

export class Api {
    public userApi: UserApi = null

    constructor() {
        this.userApi = new UserApi(api)
    }
}
