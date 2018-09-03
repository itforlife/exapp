import { Get, JsonController } from 'routing-controllers'
import { InjectRepository } from 'typeorm-typedi-extensions'
import { Repository } from 'typeorm'

import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { Campaign } from '../entities/Campaign'

const ResourcePath = '/campaigns'
type GetCampaignsReqType = TypedRequest<IExappAPI[typeof ResourcePath]['GET']>

@JsonController(ResourcePath)
export class CampaignsController {
    @InjectRepository(Campaign)
    public campaignRepository: Repository<Campaign>

    @Get('/')
    public async list(req: GetCampaignsReqType) {
        return [{ name: 'My first campaign', description: 'Lorem ipsum' }]
    }
}
