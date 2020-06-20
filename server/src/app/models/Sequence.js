const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sequences = new Schema({
  id: String,
  seq: { type: Number, default: 1 }
});

module.exports = mongoose.model('sequences', Sequences);