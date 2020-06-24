const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema = new Schema({
  name: { type: String, required: true },
  description: { type: String, required: true },
  total: { type: Number, required: true },
  date: { type: Date, required: true },
}, {
  timestamps: true,
});

const Exercise = mongoose.model('Report', exerciseSchema);

module.exports = Exercise;