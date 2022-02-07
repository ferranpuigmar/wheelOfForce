import * as mongoose from 'mongoose';

export const UsersSchema = new mongoose.Schema({
  specie: String,
  name: String,
  nickname: String,
  email: String,
  password: String,
  points: Number,
  avatar: String,
});
