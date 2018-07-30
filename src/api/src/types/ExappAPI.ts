import { User } from '../entities/User'

export interface IExappAPI {
    '/users': {
        POST: {
            body: {
                firstName: string
                lastName: string
                age: number
            }
            response: User[]
        }
    }
    '/campaigns': {
        GET: {
            response: {
                name: string
            }
        }
    }
}
