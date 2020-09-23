import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';

import { FileInterceptor } from '@nestjs/platform-express';
import {
  editFileName,
  imageFileFilter,
} from '../../utils/file-uploading.utils';
import { Category } from './category.model';
import { CategoryService } from './category.service';

@Controller('categories')
export class CategoryController {
  public constructor(private readonly categoryService: CategoryService) {}

  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async addCategory(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('description') description: string
  ): Promise<{ statusCode: HttpStatus; message: string; data: Category }> {
    let category;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      category = {
        name,
        description,
        image: savedFile.filename,
      };
    } else {
      category = {
        name,
        description,
      };
    }

    const addedCategory = await this.categoryService.insertCategory(category);

    return {
      statusCode: HttpStatus.OK,
      message: 'Category added successfully',
      data: addedCategory,
    };
  }

  @Get()
  public async getCategories(@Query('page') page): Promise<Category[]> {
    const categories = await this.categoryService.getCategories(page, '8');
    return categories;
  }

  @Get(':id')
  public async getCategory(@Param('id') categoryId: string): Promise<Category> {
    return this.categoryService.getSingleCategory(categoryId);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async updateCategory(
    @Param('id') categoryId: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @UploadedFile() file
  ): Promise<{ statusCode: HttpStatus; message: string; category: Category }> {
    let category;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      category = {
        name,
        description,
        image: savedFile.filename,
      };
    } else {
      category = {
        name,
        description,
      };
    }

    const updatedCategory = await this.categoryService.updateCategory(
      category,
      categoryId
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Category updated successfully',
      category: updatedCategory,
    };
  }
  @Delete(':id')
  public async removeCategory(
    @Param('id') categoryId: string
  ): Promise<{ statusCode: HttpStatus; message: string }> {
    const isDeleted = await this.categoryService.deleteCategory(categoryId);
    if (isDeleted) {
      return {
        statusCode: HttpStatus.OK,
        message: 'category deleted successfully',
      };
    }
  }
}
