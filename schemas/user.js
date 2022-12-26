const Joi = require('joi');

const registerUserSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'string.base': `"email" should be a type of string`,
    'string.empty': `"email" must contain value`,
    'string.pattern.base': `"email" must be contain symbol @, and look like myEmail@gmail.com`,
    'any.required': `"email" is a required field`,
  }),
  password: Joi.string().trim().min(6).required().messages({
    'string.base': `"password" should be a type of string`,
    'string.empty': `"password" must contain value`,
    'string.min': `"password" should have a minimum length of {#limit}`,
    'any.required': `"password" is a required field`,
  }),
})
  .required()
  .messages({
    'any.required': `missing fields`,
  });

module.exports = {
  registerUserSchema,
};
