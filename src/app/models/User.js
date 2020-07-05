import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Users = Schema({
  username: { type: String, required: true },
  password: { type: String },

  first_name: { type: String },
  last_name: { type: String },
  email: { type: String, lowercase: true },
  birthdate: { type: Date, default: Date.now },

  admin_flag: { type: Boolean, default: false }
}, { timestamp: true });

export default mongoose.model('users', Users);