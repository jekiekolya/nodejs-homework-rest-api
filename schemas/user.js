const Joi = require('joi');

const registerUserSchema = Joi.object({
  email: Joi.string().trim().email().required().messages({
    'string.base': `{{#label}} should be a type of string`,
    'string.empty': `{{#label}} must contain value`,
    'string.email':
      '{{#label}} must be contain symbol @ and look like "jekie@gmail.com"',
    'any.required': `{{#label}} is a required field`,
  }),
  password: Joi.string()
    .trim()
    .min(6)
    .regex(/^[a-zA-Z0-9]{6,30}$/)
    .required()
    .messages({
      'string.base': `{{#label}} should be a type of string`,
      'string.pattern.base':
        '{{#label}} with value {:[.]} fails. Password should be between 6 to 30 characters and contain letters or numbers only',
      'string.empty': `{{#label}} must contain value`,
      'string.min': `{{#label}} should have a minimum length of 6`,
      'any.required': `{{#label}} is a required field`,
    }),
})
  .required()
  .messages({
    'any.required': `missing fields`,
  });

module.exports = {
  registerUserSchema,
};
