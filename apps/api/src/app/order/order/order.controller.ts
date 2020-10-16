import { Body, Controller, Get, HttpStatus, Post, Req } from '@nestjs/common';
import { Order } from './order.model';
import { Order as OrderModel, PagerResponse } from '@pa-pos/api-interfaces';
import { OrderService } from './order.service';
import { Request } from 'express';

@Controller('order')
export class OrderController {
  public constructor(private readonly orderService: OrderService) {}
  @Post('purchase')
  public async addSale(
    @Body() body: Order
  ): Promise<{
    statusCode: HttpStatus;
    message: string;
    data: OrderModel;
  }> {
    const order: OrderModel = {
      type: 'purchase',
      discount: body.discount,
      total: body.total,
      orderItems: body.orderItems,
    };
    const addedOrder = await this.orderService.insertOrder(order);
    return {
      statusCode: HttpStatus.OK,
      message: 'Order added successfully',
      data: addedOrder,
    };
  }

  @Get()
  public async getOrders(@Req() request: Request): Promise<PagerResponse> {
    const items = await this.orderService.getOrders(request.query);
    return items;
  }
}
