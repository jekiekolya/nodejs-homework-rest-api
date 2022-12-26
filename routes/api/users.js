const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { userSchema } = require('../../schemas');
const { users } = require('../../controllers');

router.post('/', validation(userSchema), ctrlWrapper(users.registerUser));

module.exports = router;
