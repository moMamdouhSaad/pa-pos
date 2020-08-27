import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'dropdown-item',
  template: '<a class="dropdown-item"><ng-content></ng-content></a>',
  styleUrls: ['./dropdown-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class DropdownItemComponent {}
