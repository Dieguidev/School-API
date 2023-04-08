const express = require('express');
const cors = require('cors');
const routerApi = require('./routes');
const { logErrors, errorHandles, boomErrorHandler } = require('./middlewares/error.handler');

const app = express();

app.use(express.json());
app.use(cors());

app.get('/',(req, res) => {
  res.send('Hola mi server en express');
});

routerApi(app)

app.use(logErrors);
app.use(boomErrorHandler);
app.use(errorHandles)

module.exports = app;
