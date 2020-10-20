import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Inventory } from './inventory.model';
import paginate from 'jw-paginate';
import {
  Order as OrderModel,
  OrderItem,
  PagerResponse,
  InventoryItem,
} from '@pa-pos/api-interfaces';

@Injectable()
export class InventoryService {
  public constructor(
    @InjectModel('Inventory') private readonly inventoryModel: Model<Inventory>
  ) {}
  public async getInventory(queryObj): Promise<PagerResponse> {
    let allItems: Inventory[];
    const match = {
      search: {},
    };
    let sortByName: {} | null;
    const page = parseInt(queryObj.page, 10) || 1;
    const pageSize = 8;

    // search
    switch (true) {
      case queryObj.search !== 'undefined':
        match.search = {
          'item.name': {
            $regex: queryObj.search,
          },
        };
        break;

      default:
        match.search = {
          'item.name': {
            $regex: '',
          },
        };

        break;
    }
    switch (true) {
      case queryObj.sort === 'asc':
        sortByName = { 'item.name': 1 };
        break;
      case queryObj.sort === 'desc':
        sortByName = { 'item.name': -1 };
        break;
      case queryObj.sort === 'h-cost':
        sortByName = { cost: -1 };
        break;
      case queryObj.sort === 'l-cost':
        sortByName = { cost: 1 };
        break;
      case queryObj.sort === 'h-qty':
        sortByName = { qty: -1 };
        break;
      case queryObj.sort === 'l-qty':
        sortByName = { qty: 1 };
        break;

      default:
        sortByName = { created_at: -1 };
        break;
    }
    allItems = await this.inventoryModel
      .aggregate()
      .lookup({
        from: 'items',
        localField: 'item',
        foreignField: '_id',
        as: 'item',
      })
      .unwind('$item')
      .lookup({
        from: 'categories',
        localField: 'item.category',
        foreignField: '_id',
        as: 'category',
      })
      .unwind('$category')
      .match(match.search)
      .sort(sortByName)
      .exec();
    const pager = paginate(
      allItems.filter((item) => item.item !== null).length,
      page,
      pageSize
    );
    const items = allItems
      .filter((item) => item.item !== null)
      .slice(pager.startIndex, pager.endIndex + 1);
    return {
      pager,
      data: items,
    };
  }

  public async updateInventoryItem(orderItems: OrderItem[]): Promise<string> {
    const ObjectId = require('mongoose').Types.ObjectId;

    for (const orderItem of orderItems) {
      const currentQty = await (await this.findInventoryItem(orderItem.item))
        .qty;
      const currentCost = await (await this.findInventoryItem(orderItem.item))
        .cost;
      await this.inventoryModel.findOneAndUpdate(
        {
          item: ObjectId(orderItem.item),
        },
        {
          qty: currentQty + orderItem.qty,
          cost: (currentCost + orderItem.price) / 2,
        }
      );
    }
    return;
  }

  private async findInventoryItem(id): Promise<InventoryItem> {
    const ObjectId = require('mongoose').Types.ObjectId;

    let inventoryItem;
    try {
      inventoryItem = await this.inventoryModel
        .findOne({ item: ObjectId(id) })
        .exec();
    } catch (error) {
      throw new NotFoundException('Could not find inventoryItem.');
    }
    if (!inventoryItem) {
      throw new NotFoundException('Could not find inventoryItem.');
    }
    return inventoryItem;
  }
}
