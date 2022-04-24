import { createServer, Server as HTTPServer } from 'http';
import { Application } from 'express';

import Server from './api/Server';
import Logger from './utils/Logger';
import config from './constants/config';

const app: Application = new Server().application;
const server: HTTPServer = createServer(app);

Logger.info('Initialising API...');

server.listen(config.port, (): void => {
    Logger.ready(`API is running on port ${config.port}`);
});

server.on('close', (): void => {
    Logger.info('API is closing!');
});