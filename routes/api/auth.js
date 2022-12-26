const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { userSchema } = require('../../schemas');
const { auth: ctrl } = require('../../controllers');

router.post(
  '/register',
  validation(userSchema.registerUserSchema),
  ctrlWrapper(ctrl.register)
);

module.exports = router;
