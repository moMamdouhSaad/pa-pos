import { Injectable } from '@angular/core';
import { Category } from '@pa-pos/api-interfaces';
import { Observable } from 'rxjs';
import { CategoryApi } from './category.api';
import { CategoryState } from './category.state';
import { PagerService } from '@pa-pos/shared/data-access';

@Injectable({ providedIn: 'root' })
export class CategoryService {
  public constructor(
    private readonly categoryApi: CategoryApi,
    private readonly categoryState: CategoryState,
    private readonly pagerService: PagerService
  ) {}
  public loadCategories(filters): void {
    this.categoryApi.getCategoriesApi(filters).subscribe((res) => {
      this.categoryState.setCategories(res.data);
      this.pagerService.setPager(res.pager);
    });
  }
  public categories$(): Observable<Category[]> {
    return this.categoryState.getGateories();
  }

  public addNewCategory(formData: FormData): Observable<any> {
    return this.categoryApi.addCategory(formData);
    //       this.categoryState.addCategory(resp.data);
  }
  public addCategoryState(category: Category): void {
    this.categoryState.addCategory(category);
  }
}
