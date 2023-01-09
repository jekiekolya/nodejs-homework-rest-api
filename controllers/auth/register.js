const { Conflict } = require('http-errors');
const gravatar = require('gravatar');

const { User } = require('../../models');

const register = async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Checking if user already exist
  if (user) {
    throw new Conflict(`User with email - ${email}, already exist`);
  }

  // Get avatar URL
  const avatarURL = gravatar.url(email);

  // Creating new user with hashed password
  const newUser = new User({ email, avatarURL });
  newUser.setPassword(password);

  const createdUser = await newUser.save();

  res.status(201).json({
    status: 'success',
    code: 201,
    data: {
      user: {
        email,
        avatarURL,
        subscription: createdUser.subscription,
      },
    },
  });
};

module.exports = register;
