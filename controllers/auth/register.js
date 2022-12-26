const { Conflict } = require('http-errors');
const { User } = require('../../models');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  if (user) {
    throw new Conflict(`User with email - ${email}, already exist`);
  }

  const createdUser = await User.create({ email, password });

  res.status(201).json({
    status: 'success',
    cose: 201,
    data: {
      user: {
        email,
        subscription: createdUser.subscription,
      },
    },
  });
};

module.exports = register;
