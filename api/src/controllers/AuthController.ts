import * as express from 'express'
import {
    controller,
    httpPost,
    interfaces,
} from 'inversify-express-utils'
import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { inject } from 'inversify'
import {ILoginPayload, IRegisterPayload} from '../services/AuthService';

const loginPath = '/login'
type LoginUserReqType = TypedRequest<IExappAPI[typeof loginPath]['POST']>
const registerPath = '/register'
type RegisterUserReqType = TypedRequest<IExappAPI[typeof registerPath]['POST']>


interface IAuthService {
    login(payload: ILoginPayload)
    register(payload: IRegisterPayload)
}

@controller('/')
export class AuthController implements interfaces.Controller {
    authService: IAuthService
    constructor(
        @inject('AuthService') authService: IAuthService
    ) {
        this.authService = authService
    }

    @httpPost('login')
    public async login(req: LoginUserReqType) {
       const {email, password} = req.body;
       return await this.authService.login({email, password})
    }
    @httpPost('register')
    public async register(req: RegisterUserReqType) {
        const { email, password, firstName, lastName, age } = req.body;
       return await this.authService.register({email, password, firstName, lastName, age})
    }
}
