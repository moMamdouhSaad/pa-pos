import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { IQueryParams, Item, Supplier } from '@pa-pos/api-interfaces';
import { ItemService } from '@pa-pos/basic-data/data-access';
import { PagerService, SnackBarService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { debounceTime } from 'rxjs/operators';
import { ItemFormComponent } from '../item-form/item-form.component';

@Component({
  selector: 'items-list',
  templateUrl: './items-list.component.html',
  styleUrls: ['./items-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemsListComponent implements OnInit {
  public constructor(
    public readonly pagerService: PagerService,
    public readonly itemService: ItemService,
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
      this.itemService.loadItems(filters);
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
      { width: '400px', height: '600px', data: { item: new Item() } },
      ItemFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.itemService.addNewItem(data.data.item).subscribe((res) => {
          this.itemService.addItemState(res.data);
          this.snackbarService.openSnackBar(
            'item added successfully',
            'success'
          );
        });

        this.itemService.loadItems(this.filters);
      }
    });
  }
  public editSupplier(row): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { item: row } },
      ItemFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.itemService
          .updateItem(data.data.item, data.data.itemId)
          .subscribe((res) => {
            this.itemService.updateItemState(res.item);
            this.snackbarService.openSnackBar(
              'item updated successfully',
              'success'
            );
          });

        this.itemService.loadItems(this.filters);
      }
    });
  }

  public applyFilter(filter: string): void {
    this.sort = filter;
  }
}
