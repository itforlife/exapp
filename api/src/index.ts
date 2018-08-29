import 'reflect-metadata'
import * as bodyParser from 'body-parser'
import * as helmet from 'helmet'
import {Container} from "typedi";
import {createExpressServer, useContainer as routingUseContainer, Action} from "routing-controllers";
import * as dotenv from 'dotenv'
import { createConnection, useContainer } from 'typeorm'
import { AuthController, UserController, CampaignsController } from './controllers/index';
const jwt = require('jsonwebtoken')
import { secret } from '../config/config'

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
            controllers: [AuthController, UserController, CampaignsController],
            middlewares: [helmet],
            cors: true,
            validation: true,
            currentUserChecker: async (action: Action) => {
                const token = action.request.headers["authorization"];
                return jwt.verify(token, secret, (err, decoded) => {
                        if(err) {
                            return false;
                        }
                        return decoded;
                    })
                }
            })
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        )
        app.use(bodyParser.json())
        const port = process.env.PORT || 3000
        app.listen(port)
        // tslint:disable-next-line:no-console
        console.log(`Server started on port ${port} :)`)
    }
}

const startup = new Startup()
startup.server()
