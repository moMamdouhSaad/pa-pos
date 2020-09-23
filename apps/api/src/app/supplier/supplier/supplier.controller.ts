import {
  Controller,
  Post,
  Body,
  Get,
  Param,
  Patch,
  Delete,
  Query,
  HttpStatus,
  UseInterceptors,
  UploadedFile,
} from '@nestjs/common';
import { diskStorage } from 'multer';
import { FileInterceptor } from '@nestjs/platform-express';
import {
  editFileName,
  imageFileFilter,
} from '../../utils/file-uploading.utils';
import { SupplierService } from './supplier.service';
import { Supplier } from './supplier.model';
@Controller('suppliers')
export class SupplierController {
  public constructor(private readonly supplierService: SupplierService) {}
  @Post()
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async addSupplier(
    @UploadedFile() file,
    @Body('name') name: string,
    @Body('address') address: string,
    @Body('phone') phone: string,
    @Body('notes') notes: string
  ): Promise<{ statusCode: HttpStatus; message: string; data: Supplier }> {
    let supplier;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      supplier = {
        name,
        address,
        phone,
        notes,
        image: savedFile.filename,
      };
    } else {
      supplier = {
        name,
        address,
        phone,
        notes,
      };
    }
    const addedSupplier = await this.supplierService.insertSupplier(supplier);
    return {
      statusCode: HttpStatus.OK,
      message: 'Supplier added successfully',
      data: addedSupplier,
    };
  }

  @Get()
  public async getSuppliers(@Query('page') page): Promise<Supplier[]> {
    const suppliers = await this.supplierService.getSuppliers(page, '8');
    return suppliers;
  }

  @Get(':id')
  public async getSupplier(@Param('id') supplierId: string): Promise<Supplier> {
    return this.supplierService.getSingleSupplier(supplierId);
  }

  @Patch(':id')
  @UseInterceptors(
    FileInterceptor('image', {
      storage: diskStorage({
        destination: './files',
        filename: editFileName,
      }),
      fileFilter: imageFileFilter,
    })
  )
  public async updateSupplier(
    @Param('id') supplierId: string,
    @Body('name') name: string,
    @Body('address') address: string,
    @Body('phone') phone: string,
    @Body('notes') notes: string,
    @UploadedFile() file
  ): Promise<{ statusCode: HttpStatus; message: string; supplier: Supplier }> {
    let supplier;
    if (file) {
      const savedFile = {
        originalname: file.originalname,
        filename: file.filename,
      };
      supplier = {
        name,
        address,
        phone,
        notes,
        image: savedFile.filename,
      };
    } else {
      supplier = {
        name,
        address,
        phone,
        notes,
      };
    }

    const updatedSupplier = await this.supplierService.updateSupplier(
      supplier,
      supplierId
    );
    return {
      statusCode: HttpStatus.OK,
      message: 'Supplier updated successfully',
      supplier: updatedSupplier,
    };
  }

  @Delete(':id')
  public async removeSupplier(
    @Param('id') supplierId: string
  ): Promise<{ statusCode: HttpStatus; message: string }> {
    const isDeleted = await this.supplierService.deleteSupplier(supplierId);
    if (isDeleted) {
      return {
        statusCode: HttpStatus.OK,
        message: 'Supplier deleted successfully',
      };
    }
  }
}
