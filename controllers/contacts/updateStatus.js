const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const updateStatusById = async (req, res, next) => {
  const { contactId } = req.params;

  const updatedContact = await Contact.findOneAndUpdate(
    {
      $and: [{ _id: contactId }, { owner: req.user._id }],
    },
    req.body,
    {
      new: true,
      runValidators: true,
    }
  );

  if (!updatedContact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: {
      updatedContact,
    },
  });
};

module.exports = updateStatusById;
