import * as express from 'express'
import { Get, JsonController, HeaderParam} from 'routing-controllers'
import { Repository } from 'typeorm'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { User } from '../entities/User'
import { Inject } from 'typedi'
import { EncryptionService } from '../services/EncryptionService'
const ResourcePath = '/users'


@JsonController(ResourcePath)
export class UserController {
    @InjectRepository(User)
    userRepository: Repository<User>
    @Inject()
    encryptionService: EncryptionService
    @Get('/me')
    public async user(@HeaderParam('authorization') token: string ) {
       return this.encryptionService.verify(token)
    }
    @Get('/')
    public async list(req: express.Request) {
        return [{ name: 'it works' }]
    }
}
