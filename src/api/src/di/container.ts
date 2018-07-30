import { Container } from 'inversify'

export const createContainer = ({ entityManager }) => {
    const container = new Container()
    container.bind('EntityManager').toDynamicValue(() => entityManager)
    return container
}
