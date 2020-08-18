import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-text',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-text.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTextComponent {
  @HostBinding('class.card-text') public defaultClass = true;
}
