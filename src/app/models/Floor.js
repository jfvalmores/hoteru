import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Floors = Schema({
  floor_number: { type: Number },
  name: { type: String },
  hotel: { type: String },
});

export default mongoose.model('floors', Floors);