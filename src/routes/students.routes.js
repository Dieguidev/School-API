const express = require('express');
const { getStudents, getStudentById, createStudent, updateStudent, deleteStudent } = require('../controllers/students.controller');
const validatorHandler = require('../middlewares/validator.handler');
const { getStudentSchema, createStudentSchema, updateStudentSchema } = require('../schemas/students.schema');
const router = express.Router()


router.get('/', getStudents)
router.get('/:id',
  validatorHandler(getStudentSchema, 'params'),
  getStudentById
)
router.post('/',
  validatorHandler(createStudentSchema, 'body'),
  createStudent
)
router.patch('/:id',
  validatorHandler(getStudentSchema, 'params'),
  validatorHandler(updateStudentSchema, 'body'),
  updateStudent
)
router.delete('/:id',
  validatorHandler(getStudentSchema, 'params'),
  deleteStudent
)

module.exports = router;
