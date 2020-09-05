import { Component, HostBinding, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-media-object',
  template:
    '<ng-content></ng-content><ng-content select=".media-body"></ng-content>',
  styleUrls: ['./media-object.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class MediaObjectComponent {
  @HostBinding('class.media') public defaultClass = true;
}
