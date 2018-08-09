import { inject, injectable } from 'inversify'
import { EntityManager } from 'typeorm'

@injectable()
export class EmailService {
    mailProvider: any
    entityManager: EntityManager
    constructor(
        @inject('EntityManager') entityManager: EntityManager,
        @inject('MailProvider') mailProvider: any
    ) {
        this.entityManager = entityManager
        this.mailProvider = mailProvider
    }
    send() {
        this.mailProvider.send()
    }
}
