import * as express from 'express'
import { Get, JsonController, Post as HttpPost } from 'routing-controllers'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { EntityFromBody } from 'typeorm-routing-controllers-extensions'
import { User } from '../entities/User'

const ResourcePath = '/users'

@JsonController(ResourcePath)
export class UserController {
    @InjectRepository(User)
    userRepository: Repository<User>

    @HttpPost('/')
    public async create(@EntityFromBody() user: User) {
        await this.userRepository.save(user)
        //this.emailService.send()
        const users = await this.userRepository.find()
        return users
    }
    @Get('/')
    public async list(req: express.Request) {
        return [{ name: 'it works' }]
    }
}
