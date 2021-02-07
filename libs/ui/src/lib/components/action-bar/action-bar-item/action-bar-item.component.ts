import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'action-bar-item',
  templateUrl: './action-bar-item.component.html',
  styleUrls: ['./action-bar-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionBarItemComponent implements OnInit {
  @Input() icon: string;
  @Input() name: string;
  @Input() disabled: boolean;
  constructor() {}

  ngOnInit(): void {}
}
