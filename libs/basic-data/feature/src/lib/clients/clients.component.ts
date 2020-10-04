import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Client, IQueryParams } from '@pa-pos/api-interfaces';
import { ClientService } from '@pa-pos/basic-data/data-access';
import { PagerService, SnackBarService } from '@pa-pos/shared/data-access';
import { ModalService } from '@pa-pos/ui';
import { debounceTime } from 'rxjs/operators';
import { ClientFormComponent } from './client-form/client-form.component';

@Component({
  selector: 'pa-pos-clients',
  templateUrl: './clients.component.html',
  styleUrls: ['./clients.component.scss'],
})
export class ClientsComponent implements OnInit {
  public constructor(
    public readonly pagerService: PagerService,
    public readonly clientService: ClientService,
    private readonly route: ActivatedRoute,
    private readonly router: Router,
    private readonly snackbarService: SnackBarService,
    private readonly modalService: ModalService
  ) {}
  public readonly searchInp = new FormControl();
  public sort: string;
  private filters: IQueryParams;

  public ngOnInit(): void {
    this.route.queryParams.subscribe((params) => {
      const filters: IQueryParams = {
        page: params.page || 'undefined',
        search: params.search || 'undefined',
        sort: params.sort || 'undefined',
      };
      this.filters = filters;
      this.clientService.loadClients(filters);
    });

    this.searchInp.valueChanges
      .pipe(debounceTime(300))
      .subscribe((searchVal) => {
        this.router.navigate(['.'], {
          relativeTo: this.route,
          queryParams: { page: 1, search: searchVal ? searchVal : null },
          queryParamsHandling: 'merge',
        });
      });
  }

  public newClient(): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { client: new Client() } },
      ClientFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.clientService.addNewClient(data.data.client).subscribe((res) => {
          this.clientService.addClientState(res.data);
          this.snackbarService.openSnackBar(
            'Client added successfully',
            'success'
          );
        });

        this.clientService.loadClients(this.filters);
      }
    });
  }
  public editClient(row): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: { client: row } },
      ClientFormComponent
    );
    modalRef.afterClosed$.subscribe((data) => {
      if (data.data.successfully) {
        this.clientService
          .updateClient(data.data.client, data.data.clientId)
          .subscribe((res) => {
            this.clientService.updateClientState(res.client);
            this.snackbarService.openSnackBar(
              'Client updated successfully',
              'success'
            );
          });

        this.clientService.loadClients(this.filters);
      }
    });
  }

  public applyFilter(filter: string): void {
    this.sort = filter;
  }
}
