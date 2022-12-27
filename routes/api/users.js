const express = require('express');
const router = express.Router();

const { ctrlWrapper, auth, validation } = require('../../middlewares');
const { users: ctrl } = require('../../controllers');
const { userSchema } = require('../../schemas');

router.get('/current', auth, ctrlWrapper(ctrl.getCurrentUser));

router.patch(
  '/subscription',
  auth,
  validation(userSchema.updateUserSubscriptionSchema),
  ctrlWrapper(ctrl.updateSubscription)
);

module.exports = router;
