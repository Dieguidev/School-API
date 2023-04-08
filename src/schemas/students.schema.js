const Joi = require('joi');

const id = Joi.string().uuid();
const name = Joi.string()


const getStudentsSchema = Joi.object({
  id: id.required(),
});

module.exports = { getStudentsSchema }
