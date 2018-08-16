import {
    Body,
    BodyParam,
    Get,
    JsonController,
    UseBefore,
    Post as HttpPost,
    BadRequestError,
} from 'routing-controllers'
import { EntityFromBody } from 'typeorm-routing-controllers-extensions'
import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { secret } from '../../config/config'
import { User } from '../entities/User'
import { Inject } from 'typedi'
import { AuthService } from '../services/AuthService'

var jwt = require('express-jwt')

const loginPath = '/login'
type LoginUserReqType = TypedRequest<IExappAPI[typeof loginPath]['POST']>

export interface IUserLoginPayload {
    password: string
    email: string
}
@JsonController('/')
export class AuthController {
    @Inject()
    authService: AuthService

    @Get('me')
    @UseBefore(jwt({ secret: secret }))
    public async user(req: { user: LoginUserReqType }) {
        return req.user
    }

    @HttpPost('login')
    public async login(@Body() user: IUserLoginPayload) {
        const { password, email } = user
        try {
            return await this.authService.login(password, email)
        } catch (e) {
            console.log(e)
            throw new BadRequestError(e)
        }
    }
    @HttpPost('register')
    public async register(
        @BodyParam('password') password: string,
        @EntityFromBody() user: User
    ) {
        try {
            return await this.authService.register(user, password)
        } catch (e) {
            throw new BadRequestError(e)
        }
    }
}
