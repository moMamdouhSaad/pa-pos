import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';
import { NavigationLink } from '../models/navigation-link-model';

@Injectable({
  providedIn: 'root',
})
export class NavigationService {
  private navigationLinks: BehaviorSubject<
    NavigationLink[]
  > = new BehaviorSubject(null);

  constructor() {
    this.loadNavLinks();
  }
  private loadNavLinks(): void {
    this.navigationLinks.next(NAV_LINKS);
  }
  navLinks$(): Observable<NavigationLink[]> {
    return this.navigationLinks.asObservable();
  }
}

const NAV_LINKS: NavigationLink[] = [
  { title: 'Overview', url: 'dashboard' },
  { title: 'Sales Entries', url: 'sales' },
  { title: 'Purchases Entries', url: 'purchase' },
  { title: 'Reports', url: 'reports' },
  { title: 'Configuration', url: 'configuration' },
];
