import { EntityManager } from 'typeorm'
import { Service, Inject } from 'typedi'

@Service()
export class EmailService {
    mailProvider: any
    entityManager: EntityManager
    constructor(
        @Inject() entityManager: EntityManager,
        @Inject() mailProvider: any
    ) {
        this.entityManager = entityManager
        this.mailProvider = mailProvider
    }
    send() {
        this.mailProvider.send()
    }
}
