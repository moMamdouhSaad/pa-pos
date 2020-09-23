import * as mongoose from 'mongoose';

export const suppliersSchema = new mongoose.Schema({
  name: { type: String, required: true },
  image: { type: String, required: false },
  notes: { type: String, required: false },
  address: { type: String, required: false },
  phone: { type: String, required: false },
});

export interface Supplier extends mongoose.Document {
  _id: string;
  name: string;
  image: string;
  notes: string;
  address: string;
  phone: string;
}
