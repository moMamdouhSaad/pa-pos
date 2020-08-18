import {
  Component,
  HostBinding,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-image',
  template: '<ng-content></ng-content>',
  styleUrls: ['./card-image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardImageComponent {
  @HostBinding('class.card-img-top') public defaultClass = true;
}
