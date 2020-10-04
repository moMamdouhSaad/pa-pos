import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { Model } from 'mongoose';
import { Client } from './client.model';
import paginate from 'jw-paginate';

@Injectable()
export class ClientService {
  @InjectModel('Client') private readonly clientModel: Model<Client>;

  public async insertClient(supplier): Promise<Client> {
    const newClient = new this.clientModel(supplier);
    const result = await newClient.save();
    return result;
  }

  public async getClients(queryObj): Promise<PagerResponse> {
    let allClients: Client[];
    const match = {
      search: [],
    };
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
    allClients = await this.clientModel
      .find()
      .or(match.search)
      .sort(sortByName)
      .exec();

    const pager = paginate(allClients.length, page, pageSize);
    const clients = allClients.slice(pager.startIndex, pager.endIndex + 1);
    return {
      pager,
      data: clients,
    };
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
