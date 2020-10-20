import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IQueryParams } from '@pa-pos/api-interfaces';
import { PagerService, SnackBarService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { InventoryService } from '@pa-pos/inventory/data-access';
import { ActivatedRoute, Router } from '@angular/router';
import { debounceTime } from 'rxjs/operators';

@Component({
  selector: 'pa-pos-inventory',
  templateUrl: './inventory.component.html',
  styleUrls: ['./inventory.component.scss'],
})
export class InventoryComponent implements OnInit {
  public constructor(
    public readonly pagerService: PagerService,
    private readonly snackbarService: SnackBarService,
    private readonly modalService: ModalService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,

    public readonly inventoryService: InventoryService
  ) {}
  public readonly searchInp = new FormControl();
  public sort: string;
  public checkedItem: string;
  public filters: IQueryParams;

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const filters: IQueryParams = {
        page: params.page || 'undefined',
        search: params.search || 'undefined',
        sort: params.sort || 'undefined',
      };
      this.filters = filters;
      this.inventoryService.loadInventory(filters);
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

  public applyFilter(filter: string): void {
    this.sort = filter;
    this.checkedItem = filter;
  }
}
