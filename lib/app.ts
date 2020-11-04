// lib/app.ts

import express from "express";
import * as bodyParser from "body-parser";
import { Routes } from "./routes/crmRoutes";
import responseTime from 'response-time';
class App {

    public app: express.Application = express();
    public routePrv: Routes = new Routes();

    constructor() {
        this.config();
        this.routePrv.routes(this.app);
    }

    private config(): void {
        // support application/json type post data
        this.app.use(bodyParser.json());
        this.app.use(responseTime())
        //support application/x-www-form-urlencoded post data
        this.app.use(bodyParser.urlencoded({ extended: false }));
    }

}

export default new App().app;