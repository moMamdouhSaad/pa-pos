import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-tabs',
  template:
    '<ul class="nav nav-tabs card-header-tabs"><ng-content></ng-content></ul>',
  styleUrls: ['./card-tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTabsComponent {}
