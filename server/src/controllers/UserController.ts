import * as express from 'express';
import { Get, JsonController, CurrentUser } from 'routing-controllers';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from '@entities/User';
import { Inject } from 'typedi';
import { EncryptionService } from '@services/EncryptionService';

@JsonController('/users')
export class UserController {
    @InjectRepository(User)
    userRepository: Repository<User>;
    @Inject()
    encryptionService: EncryptionService;
    @Get('/me')
    public async user(@CurrentUser() user: User) {
        return user
            ? user
            : {
                  message: 'invalid token',
              };
    }
    @Get('/')
    public async list(req: express.Request) {
        return [{ name: 'it works' }];
    }
}
