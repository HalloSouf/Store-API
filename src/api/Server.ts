import Express, { Application } from 'express';
import { initRoutes } from './routes';

/**
 * Server
 */
class Server {

    private _app: Application = Express();
    private readonly options: ServerOptions = {
        prefix: '/api'
    }

    constructor() {
        initRoutes(this._app, this.options.prefix);
    }

    public get application(): Application {
        return this._app;
    }

}

export interface ServerOptions {
    prefix: string;
}

export default Server;