import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from './supplier.model';
import paginate from 'jw-paginate';
import { PagerResponse } from '@pa-pos/api-interfaces';

@Injectable()
export class SupplierService {
  public constructor(
    @InjectModel('Supplier') private readonly supplierModel: Model<Supplier>
  ) {}

  public async insertSupplier(supplier): Promise<Supplier> {
    const newSupplier = new this.supplierModel(supplier);
    const result = await newSupplier.save();
    return result;
  }

  public async getSuppliers(queryObj): Promise<PagerResponse> {
    let allSuppliers: Supplier[];
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
    allSuppliers = await this.supplierModel
      .find()
      .or(match.search)
      .sort(sortByName)
      .exec();

    const pager = paginate(allSuppliers.length, page, pageSize);
    const suppliers = allSuppliers.slice(pager.startIndex, pager.endIndex + 1);
    return {
      pager,
      data: suppliers,
    };
  }

  public async getSingleSupplier(supplierId: string): Promise<Supplier> {
    const supplier = await this.findSupplier(supplierId);
    return supplier;
  }

  public async updateSupplier(
    supplier: Supplier,
    supplierId: string
  ): Promise<Supplier> {
    const updatedSupplier = await this.supplierModel.findOneAndUpdate(
      { _id: supplierId },
      supplier
    );
    return updatedSupplier;
  }

  public async deleteSupplier(supplierId: string): Promise<boolean> {
    const result = await this.supplierModel
      .deleteOne({ _id: supplierId })
      .exec();
    if (result.n === 0) {
      throw new NotFoundException('Could not find supplier.');
    }
    return true;
  }

  private async findSupplier(id: string): Promise<Supplier> {
    let supplier;
    try {
      supplier = await this.supplierModel.findById(id).exec();
    } catch (error) {
      throw new NotFoundException('Could not find supplier.');
    }
    if (!supplier) {
      throw new NotFoundException('Could not find supplier.');
    }
    return supplier;
  }
}
