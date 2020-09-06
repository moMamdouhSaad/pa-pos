import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  Input,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-nav',
  template: ` <ng-content></ng-content> `,
  styleUrls: ['./nav.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavComponent {
  @HostBinding('class.nav') public defaultClass = true;

  @HostBinding('class.justify-content-center') @Input() public center = false;

  @HostBinding('class.justify-content-end') @Input() public end = false;

  @HostBinding('class.flex-column') @Input() public vertical = false;

  @HostBinding('class.nav-tabs') @Input() public tabs = false;

  @HostBinding('class.nav-pills') @Input() public pills = false;

  @HostBinding('class.nav-justified') @Input() public justifiy = false;
}
