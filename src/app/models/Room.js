const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Rooms = Schema({
  room_no: { type: Number },
  description: { type: String },
  floor: { type: String },
  rate: { type: Number },
});

module.exports = mongoose.model('rooms', Rooms);