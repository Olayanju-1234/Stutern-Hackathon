const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const config = require('./config/env');

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

// routes does not exist yet
app.use("*", (req, res) => {
    res.status(404).json({ error: "not found" });
}
);

module.exports = app;