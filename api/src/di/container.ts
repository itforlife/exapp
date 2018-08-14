import { Container } from 'inversify'
import { EmailService } from '../services/EmailService'
import { MailgunService } from '../services/MailgunService'
import { AuthService } from '../services/AuthService';
import { EncryptionService } from '../services/EncryptionService';

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
    container
        .bind('AuthService')
        .to(AuthService)
        .inRequestScope()
    container
        .bind('EncryptionService')
        .to(EncryptionService)
        .inRequestScope()
    return container
}
