export interface Message {
  message: string;
}
export interface Pager {
  totalItems: number;
  currentPage: number;
  pageSize: number;
  totalPages: number;
  startPage: number;
  endPage: number;
  startIndex: number;
  endIndex: number;
  pages: number[];
}
export interface PagerResponse {
  pager: Pager;
  // tslint:disable-next-line: no-any
  data: any;
}

export class Category {
  public _id: string;
  public name: string;
  public image: string;
  public description: string;
}

// tslint:disable-next-line: max-classes-per-file
export class Item {
  public _id: string;
  public name: string;
  public image: string;
  public description: string;
  public barcode: string;
  // tslint:disable-next-line: variable-name
  public category_id: string;
}
// tslint:disable-next-line: max-classes-per-file
export class Supplier {
  public _id: string;
  public name: string;
  public image: string;
  public address: string;
  public phone: string;
  public notes: string;
}

// tslint:disable-next-line: max-classes-per-file
export class Client {
  public _id: string;
  public name: string;
  public image: string;
  public address: string;
  public phone: string;
  public notes: string;
}
export interface OrderItem {
  item: Item;
  qty: number;
  price: number;
  total: number;
}
// tslint:disable-next-line: max-classes-per-file
export class Order {
  public type: string;
  public discount: number;
  public total: number;
  public orderItems: [OrderItem];
}
export interface InventoryItem {
  _id: string;
  item: Item;
  qty: number;
  cost: number;
  reorderPoint: number;
}

export interface IQueryParams {
  sort?: string;
  search?: string;
  page?: string;
}
