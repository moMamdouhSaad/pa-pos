import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-jumbotron',
  template: '<ng-content></ng-content>',
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class JumbotronComponent {
  @HostBinding('class.jumbotron') public defaultClass = true;
}
