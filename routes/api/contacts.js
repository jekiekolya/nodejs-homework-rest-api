const express = require('express');
const router = express.Router();

const { validation, ctrlWrapper } = require('../../middlewares');
const { contactSchema } = require('../../schemas');
const { contacts: ctrl } = require('../../controllers');

router.get('/', ctrlWrapper(ctrl.getAll));

router.get('/:contactId', ctrlWrapper(ctrl.getById));

router.post(
  '/',
  validation(contactSchema.addContactSchema),
  ctrlWrapper(ctrl.add)
);

router.delete('/:contactId', ctrlWrapper(ctrl.removeById));

router.put(
  '/:contactId',
  validation(contactSchema.updateContactSchema),
  ctrlWrapper(ctrl.updateById)
);

router.patch(
  '/:contactId/favorite',
  validation(contactSchema.updateContactStatusSchema),
  ctrlWrapper(ctrl.updateStatusById)
);

module.exports = router;
