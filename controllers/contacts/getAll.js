const { BadRequest } = require('http-errors');

const { Contact } = require('../../models');

const getAll = async (req, res) => {
  const { _id } = req.user;
  const { page = 1, limit = 10, favorite } = req.query;

  const searchContactParams = {
    owner: _id,
  };

  // Filter
  const favoriteCondition = favorite === 'true' || favorite === 'false';
  if (!favoriteCondition && favorite !== undefined) {
    throw new BadRequest('Wrong "favorite" query parameter');
  }
  if (favoriteCondition) {
    searchContactParams.favorite = favorite;
  }

  // Pagination
  const skip = (page - 1) * limit;

  // Find contacts
  const contacts = await Contact.find(searchContactParams, '', {
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
