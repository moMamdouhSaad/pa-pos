import { Module } from '@nestjs/common';
import { SupplierController } from './supplier/supplier.controller';
import { SupplierService } from './supplier/supplier.service';
import { MongooseModule } from '@nestjs/mongoose';
import { suppliersSchema } from './supplier/supplier.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: 'Supplier', schema: suppliersSchema }]),
  ],
  controllers: [SupplierController],
  providers: [SupplierService],
})
export class SupplierModule {}
