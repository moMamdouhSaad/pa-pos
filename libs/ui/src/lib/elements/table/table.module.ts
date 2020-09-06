import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableColumnDirective } from './table/table-column.directive';

@NgModule({
  declarations: [TableComponent, TableColumnDirective],
  imports: [CommonModule],
  exports: [TableComponent, TableColumnDirective],
})
export class TableModule {}
