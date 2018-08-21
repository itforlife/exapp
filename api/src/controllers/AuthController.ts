import {
    Body,
    BodyParam,
    JsonController,
    Post as HttpPost,
    BadRequestError,
} from 'routing-controllers'
import { EntityFromBody } from 'typeorm-routing-controllers-extensions'

import { User } from '../entities/User'
import { Inject } from 'typedi'
import { AuthService } from '../services/AuthService'
import { request } from 'request'
import { providers } from '../constants/SocialProviders';

export interface IUserLoginPayload {
    password: string
    email: string
}
export interface IUserPasswordChangePayload {
    password: string
    newPassword: string
    email: string
}
@JsonController('/auth')
export class AuthController {
    @Inject()
    authService: AuthService

    @HttpPost('/local')
    public async login(@Body() user: IUserLoginPayload) {
        const { password, email } = user
        try {
            return await this.authService.login(password, email)
        } catch (e) {
            console.log(e)
            throw new BadRequestError(e)
        }
    }
    @HttpPost('/reset')
    public async resetPassword(@Body() payload: IUserPasswordChangePayload) {
        const { password, email, newPassword } = payload
        try {
            return await this.authService.resetPassword(password, email, newPassword)
        } catch (e) {
            console.log(e)
            throw new BadRequestError(e)
        }
    }
    @HttpPost('/register')
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
    @HttpPost('/provider')
    public async providerLogin(
        @BodyParam('provider') provider: keyof typeof providers,
        @BodyParam('authToken') authToken: string
    ) {
        const providerUrl = providers[provider].url;
        return request({
            url: providerUrl,
            qs: {access_token: authToken}
        }, async (error, response, body) => {
            if (!error && response.statusCode == 200) {
                return await this.authService.registerWithProvider(body)
            } else {
                throw new BadRequestError(error);
            }
        })
    }
}
