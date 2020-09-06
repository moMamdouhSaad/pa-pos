import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav-item',
  template: ` <ng-content></ng-content> `,
  changeDetection: ChangeDetectionStrategy.OnPush,
  styles: [
    `
      :host {
        cursor: pointer;
      }
    `,
  ],
})
export class NavItemComponent {
  @HostBinding('class.nav-link') public defaultClass = true;
  @HostBinding('class.active') @Input() public active = false;
}
