const dotenv = require("dotenv");
dotenv.config();

const config = {
    MONGO_DB_NAME: process.env.MONGO_DB_NAME,
    MONGO_LOCAL_DB_NAME: process.env.MONGO_LOCAL_DB_NAME,
    MONGO_DB_URL: process.env.MONGO_DB_URL,
    NODE_ENV: process.env.NODE_ENV,
    PORT: process.env.PORT,
  };
  
module.exports = config;
  