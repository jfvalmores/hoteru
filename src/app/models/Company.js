import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Companies = Schema({
  name: { type: String },
  type: { type: String },
  location: { type: String },
  website: { type: String },
});

export default mongoose.model('companies', Companies);