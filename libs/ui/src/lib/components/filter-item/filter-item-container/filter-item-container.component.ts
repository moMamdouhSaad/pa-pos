import {
  Component,
  ChangeDetectionStrategy,
  Input,
  QueryList,
  ContentChildren,
  EventEmitter,
  Output,
} from '@angular/core';
import { FilterItemComponent } from '../filter-item/filter-item.component';

@Component({
  selector: 'filter-item-container',
  templateUrl: './filter-item-container.component.html',
  styleUrls: ['./filter-item-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FilterItemContainerComponent {
  @ContentChildren(FilterItemComponent) public filterItems: QueryList<
    FilterItemComponent
  >;
  public constructor() {}
  @Input() public filterName: string;
  @Output() public readonly changeFilter = new EventEmitter<number>();

  public someMethod(e): void {
    if (e.target.value) {
      this.changeFilter.next(e.target.value);
    }
  }
}
