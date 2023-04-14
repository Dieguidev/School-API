const Joi = require('joi');

const id = Joi.number()
const name = Joi.string()
const email = Joi.string().min(8);
const password = Joi.string()


const createStudentSchema = Joi.object({
  email: email.required(),
  password: password.required()
})

const getStudentSchema = Joi.object({
  id: id.required(),
});

const updateStudentSchema = Joi.object({
  email: email,
});

module.exports = { getStudentSchema, createStudentSchema, updateStudentSchema }
