import { Injectable } from '@angular/core';
import { Category } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class CategoryState {
  private readonly categoriesSubject = new BehaviorSubject<Category[]>(null);

  public setCategories(categories: Category[]): void {
    console.log(categories);
    this.categoriesSubject.next(categories);
  }
  public getGateories(): Observable<Category[]> {
    return this.categoriesSubject.asObservable();
  }

  public addCategory(category: Category): void {
    const categories = this.categoriesSubject.getValue();
    this.categoriesSubject.next([...categories, category]);
  }
}
