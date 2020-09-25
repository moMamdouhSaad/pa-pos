import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';
import { Pager } from '@pa-pos/api-interfaces';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  public constructor() {}

  @Output() public readonly next = new EventEmitter<number>();
  @Output() public readonly previous = new EventEmitter<number>();

  @Input() public readonly pager: Pager;

  public currentRowIndex = 0;

  public ngOnInit(): void {}
}
