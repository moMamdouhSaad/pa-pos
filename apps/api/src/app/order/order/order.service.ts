import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Order } from './order.model';
import { Order as OrderModel, PagerResponse } from '@pa-pos/api-interfaces';
import paginate from 'jw-paginate';
import { InventoryService } from '../../inventory/inventory/inventory.service';

@Injectable()
export class OrderService {
  public constructor(
    @InjectModel('Order') private readonly orderModel: Model<Order>,
    private readonly inventoryService: InventoryService
  ) {}
  public async insertOrder(order: OrderModel): Promise<OrderModel> {
    const newOrder = new this.orderModel(order);
    const result = await newOrder.save();
    this.inventoryService.updateInventoryItem(order.orderItems);
    return result;
  }

  public async getOrders(queryObj): Promise<PagerResponse> {
    let allOrders: OrderModel[];
    const page = parseInt(queryObj.page, 10) || 1;
    const pageSize = 8;

    // allOrders = await this.orderModel
    //   .aggregate()
    //   .lookup({
    //     from: 'items',
    //     localField: 'orderItems.item',
    //     foreignField: '_id',
    //     as: 'item',
    //   })
    //   .exec();
    allOrders = await this.orderModel.find().populate('orderItems.item').exec();
    const pager = paginate(allOrders.length, page, pageSize);
    const orders = allOrders.slice(pager.startIndex, pager.endIndex + 1);
    return { pager, data: orders };
  }
}
