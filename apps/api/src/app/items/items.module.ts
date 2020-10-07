import { Module } from '@nestjs/common';
import { ItemController } from './items/item.controller';
import { ItemService } from './items/item.service';
import { MongooseModule } from '@nestjs/mongoose';
import { itemsSchema } from './items/item.model';
import { inventorySchema } from '../inventory/inventory/inventory.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Item', schema: itemsSchema },
      { name: 'Inventory', schema: inventorySchema },
    ]),
  ],
  controllers: [ItemController],
  providers: [ItemService],
})
export class ItemsModule {}
