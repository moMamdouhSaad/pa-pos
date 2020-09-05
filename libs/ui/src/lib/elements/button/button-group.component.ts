import { Component, ChangeDetectionStrategy, HostBinding } from '@angular/core';

@Component({
  selector: 'pa-pos-button-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent {
  public constructor() {}

  @HostBinding('class.btn-group') public defaultClass = true;
}
