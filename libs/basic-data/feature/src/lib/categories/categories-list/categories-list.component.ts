import { HttpClient } from '@angular/common/http';
import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Category } from '@pa-pos/api-interfaces';
import { CategoryService } from '@pa-pos/basic-data/data-access';
import { PagerService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
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
    private readonly route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParams.subscribe((x) =>
      this.categoryService.loadCategories(x.page || 1)
    );
  }

  public newCategory(): void {
    this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { category: new Category() } },
      CategoryFormComponent
    );
  }
}
