import { User } from '../entities/User'

export interface IExappAPI {
    '/users': {
        POST: {
            body: {
                firstName: string
                lastName: string
                age: number,
                email: string, 
            }
            params: {}
            query: {}
            response: User[]
        }
    }
    '/campaigns': {
        GET: {
            response: {
                name: string
            }
            body: {}
            params: {}
            query: {}
        }
    },
    '/login': {
        POST: {
            body: {
                password: string,
                email: string, 
            }
            params: {}
            query: {}
            response: User
        }
    },
    '/register': {
        POST: {
            body: {
                firstName: string
                lastName: string
                age: number,
                email: string,
                password: string 
            }
            params: {}
            query: {}
            response: User
        }
    }
}
