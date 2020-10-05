import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { Model } from 'mongoose';
import { Item } from './item.model';
import paginate from 'jw-paginate';
@Injectable()
export class ItemService {
  public constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>
  ) {}

  public async insertItem(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    const result = await newItem.save();
    return result;
  }

  public async getItems(queryObj): Promise<PagerResponse> {
    let allItems: Item[];
    const match = { search: [] };
    let sortByName: string | null;
    const page = parseInt(queryObj.page, 10) || 1;
    const pageSize = 8;

    // search
    switch (true) {
      case queryObj.search !== 'undefined':
        match.search = [
          {
            name: {
              $regex: queryObj.search,
            },
          },
          {
            description: {
              $regex: queryObj.search,
            },
          },
        ];
        break;

      default:
        match.search = [
          {
            name: {
              $regex: '',
            },
          },
          {
            description: {
              $regex: '',
            },
          },
        ];
        break;
    }
    switch (true) {
      case queryObj.sort === 'asc':
        sortByName = 'name';
        break;
      case queryObj.sort === 'desc':
        sortByName = '-name';
        break;

      default:
        sortByName = '-created_at';
        break;
    }

    allItems = await this.itemModel
      .find()
      .or(match.search)
      .sort(sortByName)
      .populate('category')
      .exec();

    const pager = paginate(allItems.length, page, pageSize);
    const items = allItems.slice(pager.startIndex, pager.endIndex + 1);
    return { pager, data: items };
  }

  public async getSingleItem(categoryId: string): Promise<Item> {
    const item = await this.findItem(categoryId);
    return item;
  }

  public async updateItem(item: Item, itemId: string): Promise<Item> {
    const updatedItem = await this.itemModel.findOneAndUpdate(
      { _id: itemId },
      item
    );
    return updatedItem;
  }

  public async deleteItem(itemId: string): Promise<boolean> {
    const result = await this.itemModel.deleteOne({ _id: itemId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find item.');
    }
    return true;
  }

  private async findItem(id: string): Promise<Item> {
    let category;
    try {
      category = await this.itemModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find Item.');
    }
    if (!category) {
      throw new NotFoundException('Could not find Item.');
    }
    return category;
  }
}
