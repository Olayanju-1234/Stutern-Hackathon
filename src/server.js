import connectDB from './config/db.js';
import config from './config/env.js';
import app from './app.js';

const { PORT } = config;

connectDB()
    .then(() => {
        app.listen(PORT, () => {
            console.log(`Server listening on port ${PORT}`);
        });
    })
    .catch((err) => {
        console.log(err);
    });
