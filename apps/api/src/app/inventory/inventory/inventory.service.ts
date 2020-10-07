import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { Model } from 'mongoose';
import { Inventory } from './inventory.model';
import paginate from 'jw-paginate';

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
          name: {
            $regex: queryObj.search,
          },
        };

        break;

      default:
        match.search = {
          name: {
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
}
