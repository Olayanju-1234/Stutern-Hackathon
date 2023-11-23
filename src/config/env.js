import dotenv from 'dotenv';
dotenv.config();

const config = {
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_LOCAL_DB_NAME: process.env.MONGO_LOCAL_DB_NAME,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
    JWT_SECRET: process.env.JWT_SECRET,
    SALT_LENGTH: process.env.SALT_LENGTH,
    SALT_TOKEN: process.env.SALT_TOKEN,
};

export default config;
