import { Injectable } from '@angular/core';
import { Supplier } from '@pa-pos/api-interfaces';
import { Observable } from 'rxjs';
import { SupplierApi } from './supplier.api';
import { SupplierState } from './supplier.state';
import { PagerService } from '@pa-pos/shared/data-access';

@Injectable({ providedIn: 'root' })
export class SupplierService {
  public constructor(
    private readonly supplierApi: SupplierApi,
    private readonly supplierState: SupplierState,
    private readonly pagerService: PagerService
  ) {}
  public loadSuppliers(filters): void {
    this.supplierApi.getSuppliersApi(filters).subscribe((res) => {
      this.supplierState.setSuppliers(res.data);
      this.pagerService.setPager(res.pager);
    });
  }
  public suppliers$(): Observable<Supplier[]> {
    return this.supplierState.getSuppliers();
  }

  public addNewSupplier(formData: FormData): Observable<any> {
    return this.supplierApi.addSupplier(formData);
  }
  public addSupplierState(supplier: Supplier): void {
    this.supplierState.addSupplier(supplier);
  }

  public updateSupplier(
    formData: FormData,
    supplierId: string
  ): Observable<any> {
    return this.supplierApi.updateSupplier(formData, supplierId);
  }
  public updateSupplierState(supplier: Supplier): void {
    this.supplierState.updateSupplier(supplier);
  }
}
