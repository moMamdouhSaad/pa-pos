import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { BootstrapButtonMainColors } from '../../utils/utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'div[collabse]',
  templateUrl: './collabse.component.html',
  styleUrls: ['./collabse.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CollabseComponent {
  @Input() public text: string;
  @Input() public set btnColor(color: BootstrapButtonMainColors) {}
}
