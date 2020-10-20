import { Injectable } from '@angular/core';
import { InventoryItem, Item } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';
import { InventoryApi } from './inventory.api';
import { PagerService } from '@pa-pos/shared/data-access';

@Injectable({ providedIn: 'root' })
export class InventoryService {
  private readonly inventorySubject = new BehaviorSubject<InventoryItem[]>(
    null
  );

  public constructor(
    private readonly inventoryApi: InventoryApi,
    private readonly pagerService: PagerService
  ) {}
  public loadInventory(filters): void {
    this.inventoryApi.getInventoryApi(filters).subscribe((res) => {
      this.setInventory(res.data);
      this.pagerService.setPager(res.pager);
    });
  }
  public inventoryItems$(): Observable<InventoryItem[]> {
    return this.inventorySubject.asObservable();
  }
  public setInventory(inventoryItems: InventoryItem[]): void {
    this.inventorySubject.next(inventoryItems);
  }
}
