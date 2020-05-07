const Joi = require("@hapi/joi");

// Registration Validation
// Server side validation used to validate user credentials when signing up
const registerValidation = (data) => {
  const userSchema = Joi.object({
    firstName: Joi.string().required(),
    lastName: Joi.string().required(),
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  });
  return userSchema.validate(data);
};

// Login Validation
// Server side validation used to validate user credentials when logging in
const loginValidation = (data) => {
  const loginSchema = Joi.object({
    email: Joi.string().required().email(),
    password: Joi.string().required().min(6),
  });
  return loginSchema.validate(data);
};

module.exports.registerValidation = registerValidation;
module.exports.loginValidation = loginValidation;
