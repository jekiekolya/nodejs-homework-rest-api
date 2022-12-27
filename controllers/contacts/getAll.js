const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const { _id } = req.user;

  // Pagination
  const { page = 1, limit = 10 } = req.query;
  const skip = (page - 1) * limit;

  const contacts = await Contact.find({ owner: _id }, '', {
    skip,
    limit: Number(limit),
  }).populate('owner', '_id email subscription');

  res.json({
    status: 'success',
    code: 200,
    data: { contacts },
  });
};

module.exports = getAll;
