import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { InventoryController } from './inventory/inventory.controller';
import { inventorySchema } from './inventory/inventory.model';
import { InventoryService } from './inventory/inventory.service';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Inventory', schema: inventorySchema }]),
  ],
  controllers: [InventoryController],
  providers: [InventoryService],
})
export class InventoryModule {}
