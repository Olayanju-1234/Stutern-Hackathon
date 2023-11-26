import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/env.js';
import routes from './routes/index.js';
import errorHandler from './middlewares/errorHadler.js';

const { NODE_ENV } = config;

const app = express();

app.use(
    cors({
        origin: ['http://localhost:8081', 'https://klusterhon.onrender.com'],
        methods: ['GET', 'POST', 'PUT', 'DELETE'],
    })
);

if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
}

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
});

routes(app);

// routes does not exist yet
app.use('*', (req, res) => {
    res.status(404).json({ error: 'sorry, wrong url' });
});

app.use(errorHandler);

export default app;
