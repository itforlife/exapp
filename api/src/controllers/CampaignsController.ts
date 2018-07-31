import * as express from 'express'
import {
    controller,
    httpGet,
    httpPost,
    interfaces,
} from 'inversify-express-utils'
import { TypedRequest } from 'restyped-express-async'
import { Campaign } from '../entities/Campaign'
import { IExappAPI } from '../types/ExappAPI'
import { EntityManager } from 'typeorm'
import { inject } from 'inversify'

const ResourcePath = '/campaigns'
type GetCampaignsReqType = TypedRequest<IExappAPI[typeof ResourcePath]['GET']>

@controller(ResourcePath)
export class CampaignsController implements interfaces.Controller {
    public entityManager: EntityManager
    constructor(@inject('EntityManager') entityManager: EntityManager) {
        this.entityManager = entityManager
    }

    @httpGet('/')
    public async list(req: GetCampaignsReqType) {
        return [{ name: 'My first campaign' }]
    }
}
