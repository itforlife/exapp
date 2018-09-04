import * as express from 'express';
import { Get, JsonController } from 'routing-controllers';
import { InjectRepository } from 'typeorm-typedi-extensions';
import { Repository } from 'typeorm';
import { Campaign } from '@entities/Campaign';

@JsonController('/campaigns')
export class CampaignsController {
    @InjectRepository(Campaign)
    public campaignRepository: Repository<Campaign>;

    @Get('/')
    public async list(req: express.Request) {
        return [{ name: 'My first campaign', description: 'Lorem ipsum' }];
    }
}
