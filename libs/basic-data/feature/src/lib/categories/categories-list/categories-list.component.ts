import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Category } from '@pa-pos/api-interfaces';
import { CategoryService } from '@pa-pos/basic-data/data-access';
import { PagerService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { debounceTime } from 'rxjs/operators';
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
    private readonly route: ActivatedRoute,
    private readonly router: Router
  ) {}
  public readonly searchInp = new FormControl();
  public ngOnInit(): void {
    this.route.queryParams.subscribe((x) => {
      this.categoryService.loadCategories(
        x.page || 1,
        this.searchInp.value != null ? this.searchInp.value : 'undefined'
      );
    });
    this.searchInp.valueChanges.pipe(debounceTime(300)).subscribe((val) => {
      this.categoryService.loadCategories(1, val);
      this.router.navigate(['.'], {
        relativeTo: this.route,
        queryParams: { page: 1 },
      });
    });
  }

  public newCategory(): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { category: new Category() } },
      CategoryFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      console.log(data.data);
      if (data.data.successfully) {
        this.route.queryParams.subscribe((x) => {
          this.categoryService.loadCategories(
            x.page || 1,
            this.searchInp.value != null ? this.searchInp.value : 'undefined'
          );
        });
      }
    });
  }
}
