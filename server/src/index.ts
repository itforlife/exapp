import 'reflect-metadata';
import 'module-alias/register';
import * as bodyParser from 'body-parser';
import * as express from 'express';
import * as helmet from 'helmet';
import { Container } from 'typedi';
import {
    createExpressServer,
    useContainer as routingUseContainer,
    Action,
} from 'routing-controllers';
import * as dotenv from 'dotenv';
import { registerEngine } from './utils/tsx-view-engine';
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
        const app = createExpressServer({
            controllers: [__dirname + '/controllers/**/*.ts'],
            middlewares: [helmet],
            cors: true,
            validation: true,
            currentUserChecker: this.currentUserChecker,
        });
        app.use(
            bodyParser.urlencoded({
                extended: true,
            })
        );
        app.use(bodyParser.json());
        app.use(express.static(path.resolve('..', 'public')));
        const viewsPath = path.resolve(__dirname, 'views');
        registerEngine(app, viewsPath);
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
