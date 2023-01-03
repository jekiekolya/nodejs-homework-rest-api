const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const removeById = async (req, res, next) => {
  const { contactId } = req.params;

  const deletedId = await Contact.findOneAndRemove({
    $and: [{ _id: contactId }, { owner: req.user._id }],
  });
  if (!deletedId) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    message: 'contact deleted',
  });
};

module.exports = removeById;
