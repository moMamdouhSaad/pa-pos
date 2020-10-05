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
  FilterItemModule,
} from '@pa-pos/ui';
import { FlexLayoutModule } from '@angular/flex-layout';

import { ItemFormComponent } from './item-form/item-form.component';
import { RouterModule } from '@angular/router';
import { MatAutocompleteModule } from '@angular/material/autocomplete';

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
    FilterItemModule,
    TableModule,
    FormModule,
    ButtonModule,
    ModalModule,
    FormContainerModule,
    MatAutocompleteModule,
  ],
  exports: [ItemsListComponent],
})
export class ItemsModule {}
