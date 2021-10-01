const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Using mongoose to create schema.
const userSchema = new Schema({
  username: {
    type: String,
    required: true,
    unique: true,
    trim: true,
    minlength: 3
  },
}, {
  timestamps: true,
});

// username is unique, min length is 3, required and trimmed.
const User = mongoose.model('User', userSchema);

module.exports = User;