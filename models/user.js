const { Schema, model } = require('mongoose');

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

const User = model('user', userSchema);

module.exports = User;
