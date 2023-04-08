const express = require('express');
const { getStudents } = require('../controllers/students.controller');
const router = express.Router()


router.get('/', getStudents)

module.exports = router;
