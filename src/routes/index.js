const express = require('express');
const router = express.Router();
const StudentsRouter = require('./students.routes')

const routerApi = (app) => {
  app.use('/api/v1', router);
  router.use('/students', StudentsRouter);

}

module.exports = routerApi;
