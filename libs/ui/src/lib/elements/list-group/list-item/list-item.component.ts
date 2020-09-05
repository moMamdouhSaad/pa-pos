import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'list-item',
  template: '<ng-content></ng-content>',
  styleUrls: ['./list-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListItemComponent {
  @HostBinding('class.list-group-item') public defaultClass = true;
  @HostBinding('class.list-group-item-action') @Input() public hover = false;
}
