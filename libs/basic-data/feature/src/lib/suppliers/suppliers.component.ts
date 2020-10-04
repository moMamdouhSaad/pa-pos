import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IQueryParams, Supplier } from '@pa-pos/api-interfaces';
import { SupplierService } from '@pa-pos/basic-data/data-access';
import { PagerService, SnackBarService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { debounceTime } from 'rxjs/operators';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';

@Component({
  selector: 'pa-pos-suppliers',
  templateUrl: './suppliers.component.html',
  styleUrls: ['./suppliers.component.scss'],
})
export class SuppliersComponent implements OnInit {
  public constructor(
    public readonly pagerService: PagerService,
    public readonly supplierService: SupplierService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly snackbarService: SnackBarService,
    private readonly modalService: ModalService
  ) {}
  public readonly searchInp = new FormControl();
  public sort: string;
  private filters: IQueryParams;

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const filters: IQueryParams = {
        page: params.page || 'undefined',
        search: params.search || 'undefined',
        sort: params.sort || 'undefined',
      };
      this.filters = filters;
      this.supplierService.loadSuppliers(filters);
    });

    this.searchInp.valueChanges
      .pipe(debounceTime(300))
      .subscribe((searchVal) => {
        this.router.navigate(['.'], {
          relativeTo: this.route,
          queryParams: { page: 1, search: searchVal ? searchVal : null },
          queryParamsHandling: 'merge',
        });
      });
  }

  public newSupplier(): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { supplier: new Supplier() } },
      SupplierFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.supplierService
          .addNewSupplier(data.data.supplier)
          .subscribe((res) => {
            this.supplierService.addSupplierState(res.data);
            this.snackbarService.openSnackBar(
              'Supplier added successfully',
              'success'
            );
          });

        this.supplierService.loadSuppliers(this.filters);
      }
    });
  }
  public editSupplier(row): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { supplier: row } },
      SupplierFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.supplierService
          .updateSupplier(data.data.supplier, data.data.supplierId)
          .subscribe((res) => {
            this.supplierService.updateSupplierState(res.supplier);
            this.snackbarService.openSnackBar(
              'Supplier updated successfully',
              'success'
            );
          });

        this.supplierService.loadSuppliers(this.filters);
      }
    });
  }

  public applyFilter(filter: string): void {
    this.sort = filter;
  }
}
