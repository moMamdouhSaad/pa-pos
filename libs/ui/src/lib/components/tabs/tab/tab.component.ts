import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabComponent implements OnInit {
  public constructor() {}

  @Input() public tabTitle: string;
  @Input() public tablabel: string;
  @Input() public isActive = false;

  public ngOnInit(): void {}
}
