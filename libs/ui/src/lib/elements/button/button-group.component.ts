import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  HostBinding,
} from '@angular/core';

@Component({
  selector: 'pa-pos-button-group',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button-group.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonGroupComponent implements OnInit {
  public constructor() {}

  @HostBinding('class.btn-group')
  public ngOnInit(): void {}
}
