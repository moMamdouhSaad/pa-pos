import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../apps/pos/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class InventoryApi {
  public constructor(private readonly http: HttpClient) {}
  private readonly api = environment.api;

  public getInventoryApi(filters): Observable<PagerResponse> {
    return this.http.get<PagerResponse>(`${this.api}/inventory`, {
      params: filters,
    });
  }
}
