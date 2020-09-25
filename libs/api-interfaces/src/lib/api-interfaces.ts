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
