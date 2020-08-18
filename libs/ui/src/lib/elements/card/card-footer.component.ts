import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-footer',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-footer.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardFooterComponent {
  @HostBinding('class.card-footer') public defaultClass = true;
}
