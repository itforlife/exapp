import {
    Body,
    BodyParam,
    Param,
    JsonController,
    Post as HttpPost,
    BadRequestError,
} from 'routing-controllers'
import { EntityFromBody } from 'typeorm-routing-controllers-extensions'

import { User } from '../entities/User'
import { Inject } from 'typedi'
import { AuthService } from '../services/AuthService'


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
    @HttpPost('/:providerName')
    public async providerLogin(
        @Param('providerName') providerName: 'facebook' | 'google',
        @BodyParam('authToken') authToken: string
    ) {
        try {
            return await this.authService.registerWithProvider(providerName, authToken)
        } catch (e) {
            throw new BadRequestError('Invalid auth token')
        }
    }

}
