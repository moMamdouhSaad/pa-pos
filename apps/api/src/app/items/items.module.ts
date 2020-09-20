import { Module } from '@nestjs/common';
import { ItemsController } from './items/items.controller';
import { ItemsService } from './items/items.service';
import { MongooseModule } from '@nestjs/mongoose';
import { itemsSchema } from './items/item.model';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Item', schema: itemsSchema }])],
  controllers: [ItemsController],
  providers: [ItemsService],
})
export class ItemsModule {}
