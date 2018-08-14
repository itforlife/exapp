import { Body, BodyParam ,Get, JsonController, UseBefore, Post as HttpPost, BadRequestError} from "routing-controllers";
import { EntityFromBodyParam, EntityFromBody } from 'typeorm-routing-controllers-extensions';
import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { secret } from '../../config/config';
import { User } from '../entities/User'
import { Inject } from 'typedi';
import { AuthService } from "../services/AuthService";


var jwt = require('express-jwt');

const loginPath = '/login'
type LoginUserReqType = TypedRequest<IExappAPI[typeof loginPath]['POST']>


@JsonController('/')
export class AuthController {
    @Inject()
    authService: AuthService

    @Get('me' )
    @UseBefore(jwt({secret: secret}))
    public async user(req: {user: LoginUserReqType}) {
        return req.user;
    }

    @HttpPost('login')
    public async login(@Body() payload: {password: string}, @EntityFromBodyParam('email') user: User) {
       const { password } = payload;
       console.log(user);
    //    try {
    //     return await this.authService.login(password, user);
    //     } catch(e) {
    //         console.log(e)
    //         throw new BadRequestError(e);
    //     }
    }
    @HttpPost('register')
    public async  register(@BodyParam('password') password: string, @EntityFromBody() user: User) {

        try {
            return await this.authService.register(user, password);
        } catch(e) {
            throw new BadRequestError(e);
        }
    }
}
