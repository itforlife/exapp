import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import { Container } from 'inversify'
import {
    interfaces,
    InversifyExpressServer,
    cleanUpMetadata,
    TYPE,
} from 'inversify-express-utils'
import * as dotenv from 'dotenv'
import { createConnection } from 'typeorm'
import { createContainer } from './di/container'

class Startup {
    public server() {
        // create database connection
        dotenv.config()
        createConnection().then(conn => {
            this.startExpressServer(conn.manager)
        })
    }

    private startExpressServer(entityManager) {
        // load everything needed to the Container
        cleanUpMetadata()
        require('./controllers/index')
        const container = createContainer({ entityManager })
        const server = new InversifyExpressServer(container)
        server.setConfig(srv => {
            srv.use(
                bodyParser.urlencoded({
                    extended: true,
                })
            )
            srv.use(bodyParser.json())
            srv.use(cors())
            srv.use(helmet())
        })

        const app = server.build()
        const port = process.env.PORT || 3000
        app.listen(port)
        // tslint:disable-next-line:no-console
        console.log(`Server started on port ${port} :)`)
    }
}

const startup = new Startup()
startup.server()
