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
import { Item } from './item.model';
import { ItemService } from './item.service';
import { diskStorage } from 'multer';

import { FileInterceptor } from '@nestjs/platform-express';
import {
  editFileName,
  imageFileFilter,
} from '../../utils/file-uploading.utils';
@Controller('items')
export class ItemController {
  public constructor(private readonly itemsService: ItemService) {}

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
  public async addItem(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('barcode') barcode: string,
    @Body('category_id') catId: string
  ): Promise<{ statusCode: HttpStatus; message: string; data: Item }> {
    let item;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      item = {
        name,
        description,
        category: catId,
        barcode,
        image: savedFile.filename,
      };
    } else {
      item = {
        name,
        description,
        category: catId,
        barcode,
      };
    }
    const addedItem = await this.itemsService.insertItem(item);
    return {
      statusCode: HttpStatus.OK,
      message: 'Item added successfully',
      data: addedItem,
    };
  }

  @Get()
  public async getItems(@Query('page') page): Promise<Item[]> {
    const items = await this.itemsService.getItems(page, '8');
    return items;
  }

  @Get(':id')
  public async getItem(@Param('id') itemId: string): Promise<Item> {
    return this.itemsService.getSingleItem(itemId);
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
  public async updateItem(
    @UploadedFile() file,
    @Param('id') itemId: string,
    @Body('name') name: string,
    @Body('description') description: string,
    @Body('barcode') barcode: string,
    @Body('category_id') catId: string
  ): Promise<{ statusCode: HttpStatus; message: string; item: Item }> {
    let item;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      item = {
        name,
        description,
        category: catId,
        barcode,
        image: savedFile.filename,
      };
    } else {
      item = {
        name,
        description,
        category: catId,
        barcode,
      };
    }
    const updatedItem = await this.itemsService.updateItem(item, itemId);
    return {
      statusCode: HttpStatus.OK,
      message: 'Item updated successfully',
      item: updatedItem,
    };
  }
  @Delete(':id')
  public async removeItem(
    @Param('id') itemId: string
  ): Promise<{ statusCode: HttpStatus; message: string }> {
    const isDeleted = await this.itemsService.deleteItem(itemId);
    if (isDeleted) {
      return {
        statusCode: HttpStatus.OK,
        message: 'item deleted successfully',
      };
    }
  }
}
