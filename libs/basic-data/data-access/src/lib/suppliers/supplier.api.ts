import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../../apps/pos/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class SupplierApi {
  public constructor(private readonly http: HttpClient) {}
  private readonly api = environment.api;

  public getSuppliersApi(filters): Observable<PagerResponse> {
    return this.http.get<PagerResponse>(`${this.api}/suppliers`, {
      params: filters,
    });
  }

  public addSupplier(supplierFormData): Observable<any> {
    return this.http.post(`${this.api}/suppliers`, supplierFormData);
  }

  public updateSupplier(supplierFormData, supplierId: string): Observable<any> {
    return this.http.patch(
      `${this.api}/suppliers/${supplierId}`,
      supplierFormData
    );
  }
}
