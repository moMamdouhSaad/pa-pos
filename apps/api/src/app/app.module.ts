import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';
import { CategoryModule } from './category/category.module';
import { MulterModule } from '@nestjs/platform-express';
import { SupplierModule } from './supplier/supplier.module';
import { ClientModule } from './client/client.module';
import { NestFactory } from '@nestjs/core';
import { InventoryModule } from './inventory/inventory.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/inventory', {
      useFindAndModify: false,
    }),
    MulterModule.register({
      dest: './files',
    }),
    ItemsModule,
    CategoryModule,
    SupplierModule,
    ClientModule,
    InventoryModule,
    OrderModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// ng g @nestjs/schematics:module order --path app --source-root apps/api/src
// ng g @nestjs/schematics:controller order --path app/order  --source-root apps/api/src -d
// ng g @nestjs/schematics:service order --path app/order --source-root apps/api/src -d
// ng g @nestjs/schematics:class match/match.entity --path app/game --source-root apps/api/src --spec -d
