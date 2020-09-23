import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Client } from './client.model';
@Injectable()
export class ClientService {
  @InjectModel('Client') private readonly clientModel: Model<Client>;

  public async insertClient(supplier): Promise<Client> {
    const newClient = new this.clientModel(supplier);
    const result = await newClient.save();
    return result;
  }

  public async getClients(pageNo: string, limit: string): Promise<Client[]> {
    const pageOptions = {
      page: parseInt(pageNo, 10) || 0,
      limit: parseInt(limit, 10) || 8,
    };
    const clients = await this.clientModel
      .find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();
    return clients;
  }

  public async getSingleClient(clientId: string): Promise<Client> {
    const supplier = await this.findClient(clientId);
    return supplier;
  }

  public async updateClient(client: Client, clientId: string): Promise<Client> {
    const updatedClient = await this.clientModel.findOneAndUpdate(
      { _id: clientId },
      client
    );
    return updatedClient;
  }

  public async deleteClient(supplierId: string): Promise<boolean> {
    const result = await this.clientModel.deleteOne({ _id: supplierId }).exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find client.');
    }
    return true;
  }

  private async findClient(id: string): Promise<Client> {
    let client;
    try {
      client = await this.clientModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find client.');
    }
    if (!client) {
      throw new NotFoundException('Could not find client.');
    }
    return client;
  }
}
