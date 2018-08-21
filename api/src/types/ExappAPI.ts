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
    },
    '/users/me': {
        GET: {
            body: {}
            params: {}
            query: {}
            response: User
            headers: {
                authorization: string;
            }
        }
    },
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
    '/auth/local': {
        POST: {
            body: {
                password: string,
                email: string, 
            }
            params: {}
            query: {}
            response: {
                token: string;
            }
        }
    },
    '/auth/reset': {
        POST: {
            body: {
                password: string,
                email: string,
                newPassword: string
            }
            params: {}
            query: {}
            response: {
                token: string;
            }
        }
    },
    '/auth/register': {
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
            response: {
                token: string;
            }
        }
    }
}
