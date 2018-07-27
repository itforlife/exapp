import { UserApi } from './userApi';


export class Api {
    public userApi: UserApi = null;

    constructor() {
        this.userApi = new UserApi();
    }

}