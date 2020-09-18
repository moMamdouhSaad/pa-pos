import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ItemsListComponent } from './items-list/items-list.component';
import {
  BoxModule,
  LevelModule,
  IconModule,
  TableModule,
  FormModule,
  ButtonModule,
} from '@pa-pos/ui';

@NgModule({
  declarations: [ItemsListComponent],
  imports: [
    CommonModule,
    BoxModule,
    LevelModule,
    IconModule,
    TableModule,
    FormModule,
    ButtonModule,
  ],
  exports: [ItemsListComponent],
})
export class ItemsModule {}
