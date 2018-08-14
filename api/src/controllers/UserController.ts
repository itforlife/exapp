import * as express from 'express'
import { Get, JsonController, Post as HttpPost} from "routing-controllers";

import { TypedRequest } from 'restyped-express-async'
import { User } from '../entities/User'
import { IExappAPI } from '../types/ExappAPI'
import { EntityManager } from 'typeorm'
import { Inject } from 'typedi';

const ResourcePath = '/users'
type CreateUserReqType = TypedRequest<IExappAPI[typeof ResourcePath]['POST']>
interface IEmailService {
    send()
}

@JsonController(ResourcePath)
export class UserController {
    emailService: IEmailService
    public entityManager: EntityManager
    constructor(
        @Inject() entityManager: EntityManager,
        @Inject() emailService: IEmailService
    ) {
        this.entityManager = entityManager;
        this.emailService = emailService;
    }

    @HttpPost('/')
    public async create(req: CreateUserReqType) {
        const user = new User()
        user.firstName = req.body.firstName
        user.lastName = req.body.lastName
        user.age = req.body.age
        await this.entityManager.save(user)
        //this.emailService.send()
        const users = await this.entityManager.find(User)
        return users
    }
    @Get('/')
    public async list(req: express.Request) {
        return [{ name: 'it works' }]
    }
}
