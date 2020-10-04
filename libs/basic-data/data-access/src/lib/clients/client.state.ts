import { Injectable } from '@angular/core';
import { Client } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ClientState {
  private readonly clientsSubject = new BehaviorSubject<Client[]>(null);

  public setClients(clients: Client[]): void {
    this.clientsSubject.next(clients);
  }
  public getClients(): Observable<Client[]> {
    return this.clientsSubject.asObservable();
  }

  public addClient(client: Client): void {
    const clients = this.clientsSubject.getValue();
    this.clientsSubject.next([...clients, client]);
  }

  public updateClient(updateClient: Client): void {
    const clients = this.clientsSubject.getValue();
    if (clients) {
      const indexOfUpdated = clients.findIndex(
        (client) => client._id === updateClient._id
      );
      clients[indexOfUpdated] = updateClient;
      this.clientsSubject.next([...clients]);
    }
  }
}
