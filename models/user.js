const { Schema, model } = require('mongoose');
const bcrypt = require('bcryptjs');

const userSchema = Schema(
  {
    email: {
      type: String,
      required: [true, 'Email is required'],
      unique: true,
      minlength: 4,
      maxlength: 70,
      validate: /^\S+@\S+\.\S+$/,
    },
    password: {
      type: String,
      required: [true, 'Set password for user'],
      minlength: 6,
    },
    subscription: {
      type: String,
      enum: ['starter', 'pro', 'business'],
      default: 'starter',
    },
    token: String,
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

// Method for hashing password
userSchema.methods.setPassword = function setPassword(password) {
  this.password = bcrypt.hashSync(password, bcrypt.genSaltSync(10));
};

// Method for compering password
userSchema.methods.comparePassword = function comparePassword(password) {
  return bcrypt.compareSync(password, this.password);
};

const User = model('user', userSchema);

module.exports = User;