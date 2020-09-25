import {
  Component,
  ContentChildren,
  ChangeDetectionStrategy,
  QueryList,
  Input,
} from '@angular/core';
import { TableColumnDirective } from './table-column.directive';
import { Pager } from '@pa-pos/api-interfaces';
import { environment } from '../../../../../../../apps/pos/src/environments/environment';

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
  @Input() public pager: Pager;

  public currentRowIndex = 0;
  public imgPath = environment.api + '/img';
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
