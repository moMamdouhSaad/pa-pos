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
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [ItemsListComponent, ItemFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: ItemsListComponent,
      },
    ]),
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
