const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper, auth } = require('../../middlewares');
const { contactSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

router.get('/', auth, ctrlWrapper(ctrl.getAll));

router.get('/:contactId', auth, ctrlWrapper(ctrl.getById));

router.post(
  '/',
  auth,
  validation(contactSchema.addContactSchema),
  ctrlWrapper(ctrl.add)
);

router.delete('/:contactId', auth, ctrlWrapper(ctrl.removeById));

router.put(
  '/:contactId',
  auth,
  validation(contactSchema.updateContactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  auth,
  validation(contactSchema.updateContactStatusSchema),
  ctrlWrapper(ctrl.updateStatusById)
);

module.exports = router;
