import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { IQueryParams } from '@pa-pos/api-interfaces';
import { ModalService } from '@pa-pos/ui';
import { PurchaseFormComponent } from '../purchase-form/purchase-form.component';

@Component({
  selector: 'pa-pos-purchase',
  templateUrl: './purchase.component.html',
  styleUrls: ['./purchase.component.scss'],
})
export class PurchaseComponent implements OnInit {
  public constructor(private readonly modalService: ModalService) {}
  public readonly searchInp = new FormControl();
  public sort: string;
  public filters: IQueryParams;

  public ngOnInit(): void {}

  public newPurchase(): void {
    const modalRef = this.modalService.showOverlay(
      { width: '400px', height: '600px', data: {} },
      PurchaseFormComponent
    );
  }

  public applyFilter(filter: string): void {
    this.sort = filter;
  }
}
