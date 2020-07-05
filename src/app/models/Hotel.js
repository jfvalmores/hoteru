import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Hotels = Schema({
  name: { type: String },
  company: { type: String },
  address: { type: String },
});

export default mongoose.model('hotels', Hotels);