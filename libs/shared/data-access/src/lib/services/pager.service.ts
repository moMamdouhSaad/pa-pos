import { Injectable } from '@angular/core';
import { Pager } from '@pa-pos/api-interfaces';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PagerService {
  private readonly pagerSubject = new BehaviorSubject<Pager>(null);

  public constructor() {}

  public setPager(pager: Pager): void {
    this.pagerSubject.next(pager);
  }
  public getPager(): Observable<Pager> {
    return this.pagerSubject.asObservable();
  }
}
