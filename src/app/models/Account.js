import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Accounts = Schema({
  name: { type: String, required: true },
  type: { type: String, required: true },

  email: { type: String, lowercase: true },
  contact: { type: [String] },
  address: { type: String },
  gender: { type: String },

  memo: { type: String },
  card_id: { type: String },
  card_type: { type: String }
}, { timestamp: true });

export default mongoose.model('accounts', Accounts);