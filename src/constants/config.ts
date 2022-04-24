import { IConfig } from '../types/global';

const config: IConfig = {
    appname: process.env.APP_NAME || 'StoreAPI',
    environment: process.env.APP_ENV || 'dev',
    port: parseInt(process.env.APP_PORT || '3051')
}

export default config;