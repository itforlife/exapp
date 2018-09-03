import * as express from 'express';
import { Get, Render, Controller } from 'routing-controllers';
import { Repository } from 'typeorm';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { User } from '../entities/User';

@Controller()
export class MainPageController {
    @InjectRepository(User)
    userRepository: Repository<User>;

    @Get('/main')
    @Render('Main.tsx')
    public async index(req: express.Request, res: express.Response) {
        return {
            users: [{ na: 'it works mtf' }],
        };
    }
}
