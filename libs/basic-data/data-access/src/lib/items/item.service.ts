import { Injectable } from '@angular/core';
import { Item } from '@pa-pos/api-interfaces';
import { Observable } from 'rxjs';
import { ItemApi } from './item.api';
import { ItemState } from './item.state';
import { PagerService } from '@pa-pos/shared/data-access';

@Injectable({ providedIn: 'root' })
export class ItemService {
  public constructor(
    private readonly itemApi: ItemApi,
    private readonly itemState: ItemState,
    private readonly pagerService: PagerService
  ) {}
  public loadItems(filters): void {
    this.itemApi.getItemsApi(filters).subscribe((res) => {
      this.itemState.setItems(res.data);
      console.log(res.data);
      this.pagerService.setPager(res.pager);
    });
  }
  public items$(): Observable<Item[]> {
    return this.itemState.getItems();
  }

  public addNewItem(formData: FormData): Observable<any> {
    return this.itemApi.addItem(formData);
  }
  public addItemState(item: Item): void {
    this.itemState.addItem(item);
  }

  public updateItem(formData: FormData, itemId: string): Observable<any> {
    return this.itemApi.updateItem(formData, itemId);
  }
  public updateItemState(item: Item): void {
    this.itemState.updateItem(item);
  }
}
