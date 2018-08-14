import { Get, JsonController} from "routing-controllers";

import { TypedRequest } from 'restyped-express-async'
import { IExappAPI } from '../types/ExappAPI'
import { EntityManager } from 'typeorm'
import { Inject } from 'typedi';

const ResourcePath = '/campaigns'
type GetCampaignsReqType = TypedRequest<IExappAPI[typeof ResourcePath]['GET']>

@JsonController(ResourcePath)
export class CampaignsController  {
    public entityManager: EntityManager
    constructor(@Inject() entityManager: EntityManager) {
        this.entityManager = entityManager
    }

    @Get('/')
    public async list(req: GetCampaignsReqType) {
        return [{ name: 'My first campaign' }]
    }
}
