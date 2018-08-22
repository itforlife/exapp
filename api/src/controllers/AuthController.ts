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
var request = require('request')
import { providers } from '../constants/SocialProviders'

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
            return await this.authService.resetPassword(
                password,
                email,
                newPassword
            )
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
        @BodyParam('provider') provider: string,
        @BodyParam('authToken') authToken: string
    ) {
        try {
            const response = await this.validateWithProvider(
                provider,
                authToken
            )
            return await this.authService.registerWithProvider(response)
        } catch (e) {
            throw new BadRequestError('Invalid token')
        }
    }

    validateWithProvider(network, socialToken) {
        return new Promise(function(resolve, reject) {
            request(
                {
                    url: providers[network].url,
                    qs: {
                        access_token: socialToken,
                        fields: 'email, first_name, last_name, birthday',
                    },
                },
                function(error, response, body) {
                    if (!error && response.statusCode == 200) {
                        resolve(JSON.parse(body))
                    } else {
                        reject(error)
                    }
                }
            )
        })
    }
}
