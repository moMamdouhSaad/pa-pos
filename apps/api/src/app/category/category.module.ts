import { Module } from '@nestjs/common';
import { CategoryController } from './category/category.controller';
import { categoriesSchema } from './category/category.model';
import { CategoryService } from './category/category.service';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Category', schema: categoriesSchema }]),
  ],
  controllers: [CategoryController],
  providers: [CategoryService],
})
export class CategoryModule {}
