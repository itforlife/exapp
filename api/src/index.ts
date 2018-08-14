import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import * as cors from 'cors'
import * as helmet from 'helmet'
import {Container} from "typedi";

import {createExpressServer, useContainer as routingUseContainer} from "routing-controllers";
import * as dotenv from 'dotenv'
import { createConnection, useContainer } from 'typeorm'
import {AuthController} from './controllers/index';
class Startup {
    public server() {
        // create database connection
        dotenv.config()
        useContainer(Container);
        routingUseContainer(Container)
        createConnection().then(conn => {
            this.startExpressServer()
        })
    }

    private startExpressServer() {
        // load everything needed to the Container
        const app = createExpressServer({
            controllers: [AuthController],
        })
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        )
        app.use(bodyParser.json())
        app.use(cors())
        app.use(helmet())
        const port = process.env.PORT || 3000
        app.listen(port)
        // tslint:disable-next-line:no-console
        console.log(`Server started on port ${port} :)`)
    }
}

const startup = new Startup()
startup.server()
