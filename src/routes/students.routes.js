const express = require('express');
const { getStudents, getStudentById } = require('../controllers/students.controller');
const validatorHandler = require('../middlewares/validator.handler');
const { getStudentSchema } = require('../schemas/students.schema');
const router = express.Router()


router.get('/', getStudents)
router.get('/:id',
  validatorHandler(getStudentSchema, 'params'),
  getStudentById
)

module.exports = router;
