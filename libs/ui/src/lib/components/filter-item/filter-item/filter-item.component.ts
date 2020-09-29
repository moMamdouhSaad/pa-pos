import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'filter-item',
  templateUrl: './filter-item.component.html',
  styleUrls: ['./filter-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemComponent implements OnInit {
  @Input() public itemName: string | null = null;
  @Input() public value: string | null = null;

  public constructor() {}

  public ngOnInit(): void {}
}
