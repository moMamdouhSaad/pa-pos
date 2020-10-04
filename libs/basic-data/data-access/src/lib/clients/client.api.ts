import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { PagerResponse } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../../apps/pos/src/environments/environment';

@Injectable({ providedIn: 'root' })
export class ClientApi {
  public constructor(private readonly http: HttpClient) {}
  private readonly api = environment.api;

  public getClientsApi(filters): Observable<PagerResponse> {
    return this.http.get<PagerResponse>(`${this.api}/clients`, {
      params: filters,
    });
  }

  public addClient(clientFormData): Observable<any> {
    return this.http.post(`${this.api}/clients`, clientFormData);
  }

  public updateClient(clientFormData, clientId: string): Observable<any> {
    return this.http.patch(`${this.api}/clients/${clientId}`, clientFormData);
  }
}
