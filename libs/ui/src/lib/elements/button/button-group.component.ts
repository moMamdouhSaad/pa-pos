import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'button-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent {
  public constructor() {}

  @HostBinding('class') public defaultClasses = 'btn-group btn-group-toggle';
  @HostBinding('attr.data-toggle') public btns = 'buttons';
}
