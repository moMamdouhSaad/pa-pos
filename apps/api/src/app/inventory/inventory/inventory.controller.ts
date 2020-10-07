import { Controller, Get, Req } from '@nestjs/common';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { InventoryService } from './inventory.service';
import { Request } from 'express';

@Controller('inventory')
export class InventoryController {
  public constructor(private readonly inventoryService: InventoryService) {}

  @Get()
  public async getInventory(@Req() request: Request): Promise<PagerResponse> {
    const items = await this.inventoryService.getInventory(request.query);
    return items;
  }
}
