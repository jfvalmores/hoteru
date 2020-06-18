const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Users = Schema({
  username: { type: String, required: true },
  password: { type: String },
  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, lowercase: true },
  birthdate: { type: Date, default: Date.now }
}, { timestamp: true });

module.exports = mongoose.model('users', Users);