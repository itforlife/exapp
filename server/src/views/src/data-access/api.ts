import axios from 'axios'
import { UserApi } from './userApi'

const api = axios.create({
    baseURL: 'http://localhost:3000',
})

export class Api {
    public userApi: UserApi = null

    constructor() {
        this.userApi = new UserApi(api)
    }
}
