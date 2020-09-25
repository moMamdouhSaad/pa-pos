import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './table/table.component';
import { TableColumnDirective } from './table/table-column.directive';
import { PaginationComponent } from './pagination/pagination.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ImageModule } from '../image/image.module';
@NgModule({
  declarations: [TableComponent, TableColumnDirective, PaginationComponent],
  imports: [CommonModule, FlexLayoutModule, RouterModule, ImageModule],
  exports: [TableComponent, TableColumnDirective],
})
export class TableModule {}
