import { Injectable } from '@angular/core';
import { Supplier } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class SupplierState {
  private readonly suppliersSubject = new BehaviorSubject<Supplier[]>(null);

  public setSuppliers(suppliers: Supplier[]): void {
    this.suppliersSubject.next(suppliers);
  }
  public getSuppliers(): Observable<Supplier[]> {
    return this.suppliersSubject.asObservable();
  }

  public addSupplier(supplier: Supplier): void {
    const suppliers = this.suppliersSubject.getValue();
    this.suppliersSubject.next([...suppliers, supplier]);
  }

  public updateSupplier(updateSupplier: Supplier): void {
    const suppliers = this.suppliersSubject.getValue();
    if (suppliers) {
      const indexOfUpdated = suppliers.findIndex(
        (supplier) => supplier._id === updateSupplier._id
      );
      suppliers[indexOfUpdated] = updateSupplier;
      this.suppliersSubject.next([...suppliers]);
    }
  }
}
