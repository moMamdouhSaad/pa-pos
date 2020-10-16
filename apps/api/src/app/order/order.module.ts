import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { inventorySchema } from '../inventory/inventory/inventory.model';
import { InventoryService } from '../inventory/inventory/inventory.service';
import { OrderController } from './order/order.controller';
import { orderSchema } from './order/order.model';
import { OrderService } from './order/order.service';

@Module({
  controllers: [OrderController],
  providers: [OrderService, InventoryService],
  imports: [
    MongooseModule.forFeature([
      { name: 'Order', schema: orderSchema },
      { name: 'Inventory', schema: inventorySchema },
    ]),
  ],
})
export class OrderModule {}
