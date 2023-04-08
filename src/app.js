const express = require('express');
const routerApi = require('./routes');
const { logErrors, errorHandles } = require('./middlewares/error.handler');

const app = express();

app.use(express.json());

routerApi(app)

app.use(logErrors);
app.use(errorHandles)

module.exports = app;
