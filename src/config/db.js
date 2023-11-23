import mongoose from 'mongoose';
import config from './env.js';

const { MONGO_DB_NAME, MONGO_LOCAL_DB_NAME, MONGO_DB_URL, NODE_ENV } = config;

const connectDB = () => {
    return new Promise((resolve, reject) => {
        let dbName = '';

        switch (NODE_ENV) {
            case 'production':
                dbName = MONGO_DB_NAME;
                break;
            case 'development':
                dbName = MONGO_LOCAL_DB_NAME;
                break;
            default:
        }

        mongoose.connect(MONGO_DB_URL, { dbName });

        const db = mongoose.connection;


        db.on('connected', () => {
            console.log(`Mongoose connected to ${NODE_ENV} db`);
            resolve(true);
        });

        db.on('error', (err) => {
            console.log(`Mongoose connection error: ${err.message}`);
            reject(false);
        });
    });
};

export default connectDB;
