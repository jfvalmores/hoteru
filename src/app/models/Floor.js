const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Floors = Schema({
  floor_number: { type: Number },
  name: { type: String },
  hotel: { type: String },
});

module.exports = mongoose.model('floors', Floors);