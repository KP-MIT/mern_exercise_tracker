const mongoose = require('mongoose');

const Schema = mongoose.Schema;

// Using mongoose to create Schema.
const exerciseSchema = new Schema({
  username: { type: String, required: true },
  description: { type: String, required: true },
  duration: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});
// timestamp automatically logs time of creation and update. 

const Exercise = mongoose.model('Exercise', exerciseSchema);

module.exports = Exercise;

