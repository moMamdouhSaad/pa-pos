import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Supplier } from './supplier.model';
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

  public async getSuppliers(
    pageNo: string,
    limit: string
  ): Promise<Supplier[]> {
    const pageOptions = {
      page: parseInt(pageNo, 10) || 0,
      limit: parseInt(limit, 10) || 8,
    };
    const suppliers = await this.supplierModel
      .find()
      .skip(pageOptions.page * pageOptions.limit)
      .limit(pageOptions.limit)
      .exec();
    return suppliers;
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
