import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category, PagerResponse } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../../apps/pos/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class CategoryApi {
  public constructor(private readonly http: HttpClient) {}
  private readonly api = environment.api;

  public getCategoriesApi(page, search?): Observable<PagerResponse> {
    return this.http.get<PagerResponse>(`${this.api}/categories`, {
      params: {
        page,
        search,
      },
    });
  }

  public addCategory(categoryFormData): Observable<any> {
    return this.http.post(`${this.api}/categories`, categoryFormData);
  }
}
