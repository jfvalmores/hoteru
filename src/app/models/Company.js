const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Companies = Schema({
  name: { type: String },
  type: { type: String },
  location: { type: String },
  website: { type: String },
});

module.exports = mongoose.model('companies', Companies);