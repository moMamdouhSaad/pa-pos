import * as mongoose from 'mongoose';
import { Category } from '../../category/category/category.model';

export const itemsSchema = new mongoose.Schema({
  name: { type: String, required: true },
  barcode: { type: String },
  image: { type: String },
  description: { type: String },
  category: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Category',
    required: true,
  },
});

export interface Item extends mongoose.Document {
  _id: string;
  name: string;
  barcode: string;
  image: string;
  description: string;
  category: Category;
}
