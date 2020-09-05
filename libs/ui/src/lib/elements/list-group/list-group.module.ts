import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListgroupComponent } from './listgroup/listgroup.component';
import { ListItemComponent } from './list-item/list-item.component';

@NgModule({
  declarations: [ListgroupComponent, ListItemComponent],
  imports: [CommonModule],
  exports: [ListgroupComponent, ListItemComponent],
})
export class ListGroupModule {}
