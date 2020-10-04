import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category, IQueryParams } from '@pa-pos/api-interfaces';
import { CategoryService } from '@pa-pos/basic-data/data-access';
import { PagerService, SnackBarService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { debounceTime, switchMap } from 'rxjs/operators';
import { CategoryFormComponent } from '../category-form/category-form.component';

@Component({
  selector: 'pa-pos-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoriesListComponent implements OnInit {
  public constructor(
    private readonly modalService: ModalService,
    public readonly categoryService: CategoryService,
    public readonly pagerService: PagerService,
    private readonly snackbarService: SnackBarService,
    private readonly route: ActivatedRoute,
    private readonly router: Router
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
      this.categoryService.loadCategories(filters);
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

  public newCategory(): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { category: new Category() } },
      CategoryFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.categoryService
          .addNewCategory(data.data.category)
          .subscribe((res) => {
            this.categoryService.addCategoryState(res.data);
            this.snackbarService.openSnackBar(
              'Category added successfully',
              'success'
            );
          });

        this.categoryService.loadCategories(this.filters);
      }
    });
  }

  public editCategory(row): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { category: row } },
      CategoryFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.categoryService
          .updateCategory(data.data.category, data.data.catId)
          .subscribe((res) => {
            this.categoryService.updateCategoryState(res.category);
            this.snackbarService.openSnackBar(
              'Category updated successfully',
              'success'
            );
          });

        this.categoryService.loadCategories(this.filters);
      }
    });
  }

  public applyFilter(filter: string): void {
    this.sort = filter;
  }
}
