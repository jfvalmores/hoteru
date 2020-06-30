const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Sales = Schema({
  transaction_no: { type: Number },
  checkin_date: { type: Date },
  checkout_date: { type: Date },
  room_no: { type: Number },
  pax: { type: Number },
  rate: { type: Number },
  sub_total: { type: Number },
  discount: { type: Number },
  total: { type: Number },
});

module.exports = mongoose.model('sales', Sales);