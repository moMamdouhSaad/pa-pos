import * as mongoose from 'mongoose';
import { OrderItem } from '@pa-pos/api-interfaces';
export const orderSchema = new mongoose.Schema(
  {
    type: { type: String, required: true },
    discount: { type: Number },
    total: { type: Number },

    orderItems: [
      {
        item: {
          type: mongoose.Schema.Types.ObjectId,
          ref: 'Item',
          required: true,
        },
        qty: { type: Number, required: true },
        price: { type: Number, required: true },
        total: { type: Number, required: true },
      },
    ],
  },
  { timestamps: { createdAt: 'created_at' } }
);

export interface Order extends mongoose.Document {
  type: string;
  discount: number;
  total: number;
  orderItems: [OrderItem];
}
