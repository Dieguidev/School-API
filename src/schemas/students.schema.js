const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string()


const getStudentSchema = Joi.object({
  id: id.required(),
});

module.exports = { getStudentSchema }
