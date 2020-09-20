import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ItemsModule } from './items/items.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost:27017/inventory'),
    ItemsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
// ng g @nestjs/schematics:module items --path app --source-root apps/api/src
// ng g @nestjs/schematics:controller items --path app/items  --source-root apps/api/src -d
// ng g @nestjs/schematics:service items --path app/items --source-root apps/api/src -d
// ng g @nestjs/schematics:class match/match.entity --path app/game --source-root apps/api/src --spec -d
