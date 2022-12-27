const { Schema, model, SchemaTypes } = require('mongoose');

const { handleMongooseError } = require('../helpers');

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
      // NOTE: Method POPULATE take ID from TYPE field, then take Obj with this ID in USERS collection
      type: SchemaTypes.ObjectId,
      ref: 'user',
      require: true,
    },
  },
  {
    versionKey: false,
    timestamps: true,
  }
);
// Handle validation errors
contactSchema.post('save', handleMongooseError);

const Contact = model('contact', contactSchema);

module.exports = Contact;
