const mongoose = require('mongoose');
const passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new mongoose.Schema({
  first: {
    type: String,
    required: [true, "Please enter a first name"],
    minlength: [2, "first name must be at least two characters"],
  },
  last: {
    type: String,
    required: [true, "Please enter a first name"],
    minlength: [2, "first name must be at least two characters"],
  },
  username: {
    type: String,
    required: [true, "Please provide a username"],
    minlength: [2, "username must be at least two characters"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email address"],
    minlength: [2, "email must be at least two characters"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
    minlength: [8, "password must be at least eight characters"],
  },
});

UserSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model('User', UserSchema);
