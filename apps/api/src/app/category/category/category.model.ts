import * as mongoose from 'mongoose';

export const categoriesSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  description: { type: String, required: false },
});

export interface Category extends mongoose.Document {
  _id: string;
  name: string;
  image: string;
  description: string;
}
