const { NotFound } = require('http-errors');
const { Contact } = require('../../models');

const getById = async (req, res, next) => {
  const contactId = req.params.contactId;

  const contact = await Contact.findOne({
    $and: [{ _id: contactId }, { owner: req.user._id }],
  }).populate('owner', '_id email subscription');

  if (!contact) {
    throw new NotFound(`Contact with id=${contactId} not found`);
  }

  res.json({
    status: 'success',
    code: 200,
    data: { contact },
  });
};

module.exports = getById;
