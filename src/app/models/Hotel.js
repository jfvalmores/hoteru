const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Hotels = Schema({
  name: { type: String },
  company: { type: String },
  address: { type: String },
});

module.exports = mongoose.model('hotels', Hotels);