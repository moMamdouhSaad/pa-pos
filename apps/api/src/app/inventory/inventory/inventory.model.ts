import * as mongoose from 'mongoose';
import { Item } from '../../items/items/item.model';

export const inventorySchema = new mongoose.Schema(
  {
    item: {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'Item',
      required: true,
    },
    cost: { type: Number },
    qty: { type: Number },
    reorderPoint: { type: Number, default: 0 },
  },
  { timestamps: { createdAt: 'created_at' } }
);

export interface Inventory extends mongoose.Document {
  _id: string;
  item: Item;
  qty: number;
  reorderPoint: number;
}
