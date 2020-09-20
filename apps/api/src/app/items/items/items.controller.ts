import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  HttpStatus,
} from '@nestjs/common';
import { ItemsService } from './items.service';

@Controller('items')
export class ItemsController {
  public constructor(private readonly itemsService: ItemsService) {}

  @Get()
  public async getData(): Promise<any> {
    const items = await this.itemsService.getItems();
    return items;
  }

  @Post()
  public async addItem(@Body('name') itemName: string): Promise<any> {
    const item = await this.itemsService.insertItem(itemName);
    return {
      statusCode: HttpStatus.OK,
      message: 'Item added successfully',
      data: item,
    };
  }
}
