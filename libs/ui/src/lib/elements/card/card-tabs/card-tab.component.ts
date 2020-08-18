import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'card-tab',
  templateUrl: './card-tab.component.html',
  styleUrls: ['./card-tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CardTabComponent {
  @Input() public active: boolean;
}
