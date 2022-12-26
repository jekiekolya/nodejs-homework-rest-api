const { Unauthorized } = require('http-errors');
const jwt = require('jsonwebtoken');

const { User } = require('../../models');

const loginUser = async (req, res) => {
  const { SECRET_KEY } = process.env;
  const { email, password } = req.body;
  const user = await User.findOne({ email });

  // Checking if user appearing
  if (!user || !user.comparePassword(password)) {
    throw new Unauthorized('Email or password is wrong');
  }

  // Creating token
  const payload = { id: user.id };
  const token = jwt.sign(payload, SECRET_KEY, { expiresIn: '1h' });

  res.status(200).json({
    status: 'success',
    code: 200,
    data: {
      user: {
        email: user.email,
        subscription: user.subscription,
      },
      token,
    },
  });
};

module.exports = loginUser;
