import {
    controller,
    httpPost,
    httpGet,
    interfaces,
    BaseHttpController
} from 'inversify-express-utils'
import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { inject } from 'inversify'
import {ILoginPayload, IRegisterPayload} from '../services/AuthService';
import { secret } from '../../config/config';
var jwt = require('express-jwt');

const loginPath = '/login'
type LoginUserReqType = TypedRequest<IExappAPI[typeof loginPath]['POST']>
const registerPath = '/register'
type RegisterUserReqType = TypedRequest<IExappAPI[typeof registerPath]['POST']>


interface IAuthService {
    login(payload: ILoginPayload)
    register(payload: IRegisterPayload)
}

@controller('/')
export class AuthController extends BaseHttpController implements interfaces.Controller{
    authService: IAuthService
    constructor(
        @inject('AuthService') authService: IAuthService
    ) {
        super();
        this.authService = authService
    }

    @httpGet('me', jwt({secret: secret}))
    public async user(req: {user: LoginUserReqType}) {
        return req.user;
    }

    @httpPost('login')
    public async login(req: LoginUserReqType) {
       const {email, password} = req.body;
       try {
        return await this.authService.login({email, password});
        } catch(e) {
            return this.badRequest(JSON.stringify(e));
        }
    }
    @httpPost('register')
    public async register(req: RegisterUserReqType) {
        const { email, password, firstName, lastName, age } = req.body;
        try {
            return await this.authService.register({email, password, firstName, lastName, age});
        } catch(e) {
            return this.badRequest(JSON.stringify(e));
        }
    }
}
