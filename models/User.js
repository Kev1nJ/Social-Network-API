
const mongoose = require('mongoose');
const validator = require('validator');

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: [true, 'Please enter your name.'] 
  },
  email:{ 
    type: String,
    required: [true, 'Please enter an email.'],
    unique: true, 
    lowercase: true,
    validate: [calidator.isEmail, 'Please enter a valid email.']
  },
  password: { 
    type: String,
    required: [true, 'Please enter a password.'],
    minlength: 8
  },
  confirmPassword: {
    type: String,
    required: [true, 'Please confirm your password.']
  },
});

const User = mongoose.model('User', userSchema);

module.exports = mongoose.model('User', userSchema);


