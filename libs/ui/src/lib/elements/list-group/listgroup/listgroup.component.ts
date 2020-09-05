import {
  Component,
  ChangeDetectionStrategy,
  HostBinding,
  OnInit,
  Input,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-listgroup',
  template: '<ng-content></ng-content>',
  styleUrls: ['./listgroup.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ListgroupComponent {
  @HostBinding('class.list-group') public defaultClass = true;
  @HostBinding('class.list-group-horizontal')
  @Input()
  public isHorizintal = false;
}
