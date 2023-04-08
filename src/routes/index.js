const express = require('express');

const router = express.Router();
const studentsRouter = require('./students.routes')

const routerApi = (app) => {
  app.use('/api/v1', router);
  router.use('/students', studentsRouter);

}

module.exports = routerApi;
