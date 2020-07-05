import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Sequences = new Schema({
  id: String,
  seq: { type: Number, default: 1 }
});

export default mongoose.model('sequences', Sequences);