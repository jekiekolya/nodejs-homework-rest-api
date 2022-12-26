const { User } = require('../../models');

const register = async (req, res) => {
  const createdUser = await User.create(req.body);

  res.status(201).json({
    status: 'success',
    cose: 201,
    data: {
      createdUser,
    },
  });
};

module.exports = register;
