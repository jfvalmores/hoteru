const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Accounts = Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },
  email: { type: String, lowercase: true },
  contact: [String],
  address: String,
  memo: { type: String },
  card_id: { type: String },
  card_type: { type: String }
}, { timestamp: true });