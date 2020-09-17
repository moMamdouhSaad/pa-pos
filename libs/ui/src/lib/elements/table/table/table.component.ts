import {
  Component,
  ContentChildren,
  ChangeDetectionStrategy,
  QueryList,
  Input,
} from '@angular/core';
import { TableColumnDirective } from './table-column.directive';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent {
  @Input() public data: object[] | null = null;
  @Input() public itemsPerPage;

  public currentRowIndex = 0;

  @ContentChildren(TableColumnDirective) public columns: QueryList<
    TableColumnDirective
  >;

  public onNextPage(currentRowIndex): void {
    this.currentRowIndex = currentRowIndex;
  }
  public onPreviousPage(currentRowIndex): void {
    this.currentRowIndex = currentRowIndex;
  }
}
