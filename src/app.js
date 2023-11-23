import express from 'express';
import morgan from 'morgan';
import cors from 'cors';
import config from './config/env.js';
import routes from './routes/index.js';

const { NODE_ENV } = config;

const app = express();

app.use(cors());

if (NODE_ENV === 'development') {
    app.use(morgan('dev'));
    }

app.use(express.json());

app.use(express.urlencoded({ extended: true }));

app.get('/', (req, res) => {
    res.send('Hello World!');
}
);

routes(app);

// routes does not exist yet
app.use("*", (req, res) => {
    res.status(404).json({ error: "not found" });
}
);

export default app;