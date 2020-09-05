import { Component, Input, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-progress',
  templateUrl: './progress.component.html',
  styleUrls: ['./progress.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ProgressComponent {
  @Input() public value = 0;
}
