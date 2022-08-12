import { createClient } from 'redis';
import config from '../config/config.js';

class Redis {

    instance = null;
    client = null;

    static getObject() {
        if (!this.instance) {
            this.instance = new Redis();
        }
        return this.instance
    }

    constructor() {
        this.initRedis();
    }

    async initRedis() {
        this.client = createClient({
            url: config.REDIS_URL
        });
        this.client.on('error', (err) => console.log('Redis Client Error', err));
        this.client.on('connect', () => console.log('Redis Client Connected'));
        await this.client.connect();
    }
}

export default Redis;