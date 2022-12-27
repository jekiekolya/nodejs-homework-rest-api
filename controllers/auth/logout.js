const { User } = require('../../models');

const logoutUser = async (req, res) => {
  // NOTE: Here logout implement on clint side because JWT state
  // less and does not have method for deactivate token.
  // NOTE: For deactivate token you can use JWT-REDIS library.

  await User.findOneAndUpdate({ _id: req.user._id }, { token: '' });

  res.status(204).json({
    status: 'success',
    code: 204,
    message: 'User successfully logout',
  });
};

module.exports = logoutUser;
