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
  ModalModule,
  FormContainerModule,
} from '@pa-pos/ui';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ItemFormComponent } from './item-form/item-form.component';

@NgModule({
  declarations: [ItemsListComponent, ItemFormComponent],
  imports: [
    CommonModule,
    FlexLayoutModule,
    BoxModule,
    LevelModule,
    IconModule,
    TableModule,
    FormModule,
    ButtonModule,
    ModalModule,
    FormContainerModule,
  ],
  exports: [ItemsListComponent],
})
export class ItemsModule {}
