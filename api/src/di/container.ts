import { Container } from 'inversify'
import { EmailService } from '../services/EmailService'
import { MailgunService } from '../services/MailgunService'

export const createContainer = ({ entityManager }) => {
    const container = new Container()
    container.bind('EntityManager').toDynamicValue(() => entityManager)
    container
        .bind('EmailService')
        .to(EmailService)
        .inSingletonScope()
    container
        .bind('MailProvider')
        .to(MailgunService)
        .inRequestScope()
    return container
}
