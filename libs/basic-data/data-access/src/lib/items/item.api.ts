import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../../apps/pos/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ItemApi {
  public constructor(private readonly http: HttpClient) {}
  private readonly api = environment.api;

  public getItemsApi(filters): Observable<PagerResponse> {
    return this.http.get<PagerResponse>(`${this.api}/items`, {
      params: filters,
    });
  }

  public addItem(itemFormData): Observable<any> {
    return this.http.post(`${this.api}/items`, itemFormData);
  }

  public updateItem(itemFormData, itemId: string): Observable<any> {
    return this.http.patch(`${this.api}/items/${itemId}`, itemFormData);
  }
}
