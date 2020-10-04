import { Injectable } from '@angular/core';
import { Client } from '@pa-pos/api-interfaces';
import { Observable } from 'rxjs';
import { ClientApi } from './client.api';
import { ClientState } from './client.state';
import { PagerService } from '@pa-pos/shared/data-access';

@Injectable({ providedIn: 'root' })
export class ClientService {
  public constructor(
    private readonly clientApi: ClientApi,
    private readonly clientState: ClientState,
    private readonly pagerService: PagerService
  ) {}
  public loadClients(filters): void {
    this.clientApi.getClientsApi(filters).subscribe((res) => {
      this.clientState.setClients(res.data);
      this.pagerService.setPager(res.pager);
    });
  }
  public clients$(): Observable<Client[]> {
    return this.clientState.getClients();
  }

  public addNewClient(formData: FormData): Observable<any> {
    return this.clientApi.addClient(formData);
  }
  public addClientState(client: Client): void {
    this.clientState.addClient(client);
  }

  public updateClient(formData: FormData, clientId: string): Observable<any> {
    return this.clientApi.updateClient(formData, clientId);
  }
  public updateClientState(client: Client): void {
    this.clientState.updateClient(client);
  }
}
