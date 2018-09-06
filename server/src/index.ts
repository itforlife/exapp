import 'reflect-metadata';
import 'module-alias/register';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import { Container } from 'typedi';
import {
    useExpressServer,
    useContainer as routingUseContainer,
    Action,
} from 'routing-controllers';
import * as dotenv from 'dotenv';
import { createConnection, useContainer } from 'typeorm';
import * as path from 'path';

const jwt = require('jsonwebtoken');
import { secret } from '../config/config';

class Startup {
    constructor() {
        this.currentUserChecker = this.currentUserChecker.bind(this);
    }
    public server() {
        // create database connection
        dotenv.config();
        useContainer(Container);
        routingUseContainer(Container);
        createConnection().then(conn => {
            this.startExpressServer();
        });
    }

    private startExpressServer() {
        // load everything needed to the Container
        const documentRoot = path.resolve(__dirname, '..', 'public', 'assets');
        const app = express();
        app.use(express.static(documentRoot));
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        app.use(bodyParser.json());
        useExpressServer(app, {
            controllers: [__dirname + '/controllers/**/*.ts'],
            cors: true,
            validation: true,
            currentUserChecker: this.currentUserChecker,
        });
        const port = process.env.PORT || 3000;
        app.listen(port);
        // tslint:disable-next-line:no-console
        console.log(`Server started on port ${port} :)`);
    }

    private async currentUserChecker(action: Action) {
        const token = action.request.headers['authorization'];
        return jwt.verify(token, secret, (err, decoded) => {
            if (err) {
                return false;
            }
            return decoded;
        });
    }
}

const startup = new Startup();
startup.server();
