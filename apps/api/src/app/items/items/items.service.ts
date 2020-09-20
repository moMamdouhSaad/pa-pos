import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Item } from './item.model';

@Injectable()
export class ItemsService {
  public constructor(
    @InjectModel('Item') private readonly itemModel: Model<Item>
  ) {}

  public async getItems(): Promise<Item[]> {
    const items = await this.itemModel.find().exec();
    return items;
    // return books.map((book) => ({
    //   id: book.id,
    //   title: book.title,
    //   description: book.description,
    //   price: book.price,
    // }));
  }

  public async insertItem(name: string): Promise<any> {
    const newItem = new this.itemModel({
      name,
    });
    const result = await newItem.save();
    return result;
  }
}
