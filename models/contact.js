const { Schema, model, SchemaTypes } = require('mongoose');

const contactSchema = Schema(
  {
    name: {
      type: String,
      minlength: 2,
      maxlength: 70,
      required: [true, 'Set name for contact'],
    },
    email: {
      type: String,
      minlength: 4,
      maxlength: 70,
    },
    phone: {
      type: String,
      required: [true, 'Set phone for contact'],
      validate: /^\(\d\d\d\) \d\d\d-\d\d\d\d$/i,
    },
    favorite: {
      type: Boolean,
      default: false,
    },
    owner: {
      type: SchemaTypes.ObjectId,
      ref: 'user',
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);

const Contact = model('contact', contactSchema);

module.exports = Contact;
