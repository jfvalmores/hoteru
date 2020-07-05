import mongoose from 'mongoose';

const Schema = mongoose.Schema;

const Rooms = Schema({
  room_no: { type: Number },
  description: { type: String },
  floor: { type: String },
  rate: { type: Number },
});

export default mongoose.model('rooms', Rooms);