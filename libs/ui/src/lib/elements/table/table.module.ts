import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableColumnDirective } from './table/table-column.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [TableComponent, TableColumnDirective, PaginationComponent],
  imports: [CommonModule, FlexLayoutModule],
  exports: [TableComponent, TableColumnDirective],
})
export class TableModule {}
