import * as bodyParser from 'body-parser'
import * as express from 'express'
import 'reflect-metadata'
import RestypedRouter from 'restyped-express-async'
import { createConnection } from 'typeorm'
import { User } from './entities/User'
import { IExappAPI } from './types/ExappAPI'

createConnection()
    .then(async connection => {
        const app = express()
        app.use(bodyParser.json())

        const router = RestypedRouter<IExappAPI>(app)
        router.post('/users', async (req, res) => {
            const user = new User()
            user.firstName = 'Timber'
            user.lastName = 'Saw'
            user.age = 25
            await connection.manager.save(user)

            const users = await connection.manager.find(User)
            // tslint:disable-next-line:no-console
            console.log('Loaded users: ', users)
            return users
        })
        router.get('/users', async (req, res) => {
            return { users: [] }
        })
        app.listen(5000)
    })
    // tslint:disable-next-line:no-console
    .catch(error => console.log(error))
