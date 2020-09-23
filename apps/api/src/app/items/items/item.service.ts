import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.model';

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

  public async getItems(pageNo: string, limit: string): Promise<Item[]> {
    const pageOptions = {
      page: parseInt(pageNo, 10) || 0,
      limit: parseInt(limit, 10) || 8,
    };
    const items = await this.itemModel
      .find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .populate('category')
      .exec();
    return items;
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
