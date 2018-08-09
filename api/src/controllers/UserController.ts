import * as express from 'express'
import {
    controller,
    httpGet,
    httpPost,
    interfaces,
} from 'inversify-express-utils'
import { TypedRequest } from 'restyped-express-async'
import { User } from '../entities/User'
import { IExappAPI } from '../types/ExappAPI'
import { EntityManager } from 'typeorm'
import { inject } from 'inversify'

const ResourcePath = '/users'
type CreateUserReqType = TypedRequest<IExappAPI[typeof ResourcePath]['POST']>
interface IEmailService {
    send()
}

@controller(ResourcePath)
export class UserController implements interfaces.Controller {
    emailService: IEmailService
    public entityManager: EntityManager
    constructor(
        @inject('EntityManager') entityManager: EntityManager,
        @inject('EmailService') emailService: IEmailService
    ) {
        this.entityManager = entityManager
        this.emailService = emailService
    }

    @httpPost('/')
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
    @httpGet('/')
    public async list(req: express.Request) {
        return [{ name: 'it works' }]
    }
}
