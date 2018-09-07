import {
    Body,
    BodyParam,
    Param,
    Controller,
    Post,
    BadRequestError,
} from 'routing-controllers';
import { EntityFromBody } from 'typeorm-routing-controllers-extensions';

import { User } from '@entities/User';
import { Inject } from 'typedi';
import { AuthService } from '@services/AuthService';
import { ErrorsFormatterService } from '@services/ErrorsFormatterService';
import { PartialView } from '@utils/LayoutRenderer';
import { labels } from '@i18n/en_EN';
import { LogInForm } from '@partials/authentication/LogInForm';
import { Register } from '@partials/authentication/Register';

export interface IUserLoginPayload {
    password: string;
    email: string;
}
export interface IUserPasswordChangePayload {
    password: string;
    newPassword: string;
    email: string;
}
@Controller('/auth')
export class AuthController {
    @Inject()
    authService: AuthService;
    @Inject()
    errorsFormatter: ErrorsFormatterService;

    @PartialView(LogInForm)
    @Post('/login')
    public async login(@EntityFromBody() user: User) {
        const errors = await this.errorsFormatter.errorsForEntity(
            user,
            'login'
        );
        try {
            const loginResult = await this.authService.login(
                user.password,
                user.email
            );
            return {
                labels,
                errors: errors,
                generalError: loginResult.formatError(labels),
                user,
            };
        } catch (e) {
            throw new BadRequestError(e);
        }
    }
    @Post('/register')
    @PartialView(Register)
    public async register(
        @BodyParam('password') password: string,
        @EntityFromBody() user: User
    ) {
        user.password = password;
        const errors = await this.errorsFormatter.errorsForEntity(
            user,
            'register'
        );
        try {
            const registerResult = await this.authService.register(
                user,
                password
            );
            return {
                labels,
                errors: errors,
                generalError: registerResult.formatError(labels),
                user,
            };
        } catch (e) {
            throw new BadRequestError(e);
        }
    }

    @Post('/reset')
    public async resetPassword(@Body() payload: IUserPasswordChangePayload) {
        const { password, email, newPassword } = payload;
        try {
            return await this.authService.resetPassword(
                password,
                email,
                newPassword
            );
        } catch (e) {
            throw new BadRequestError(e);
        }
    }
    @Post('/social/:providerName')
    public async providerLogin(
        @Param('providerName') providerName: 'facebook' | 'google',
        @BodyParam('authToken') authToken: string
    ) {
        try {
            return await this.authService.registerWithProvider(
                providerName,
                authToken
            );
        } catch (e) {
            throw new BadRequestError('Invalid auth token');
        }
    }
}
