import { Injectable } from '@angular/core';
import { Item } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ItemState {
  private readonly itemsSubject = new BehaviorSubject<Item[]>(null);

  public setItems(items: Item[]): void {
    this.itemsSubject.next(items);
  }
  public getItems(): Observable<Item[]> {
    return this.itemsSubject.asObservable();
  }

  public addItem(item: Item): void {
    const items = this.itemsSubject.getValue();
    this.itemsSubject.next([...items, item]);
  }

  public updateItem(updatedItem: Item): void {
    const items = this.itemsSubject.getValue();
    if (items) {
      const indexOfUpdated = items.findIndex(
        (item) => item._id === updatedItem._id
      );
      items[indexOfUpdated] = updatedItem;
      this.itemsSubject.next([...items]);
    }
  }
}
