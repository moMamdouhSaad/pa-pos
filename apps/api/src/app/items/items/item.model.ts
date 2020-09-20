import * as mongoose from 'mongoose';

export const itemsSchema = new mongoose.Schema({
  id: { type: String },
  name: { type: String, required: true },
});

export interface Item extends mongoose.Document {
  id: string;
  name: string;
}
