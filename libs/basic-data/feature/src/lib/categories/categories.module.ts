import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CategoriesListComponent } from './categories-list/categories-list.component';
import { RouterModule } from '@angular/router';

import {
  BoxModule,
  LevelModule,
  IconModule,
  TableModule,
  FormModule,
  ButtonModule,
  ModalModule,
  FormContainerModule,
  DropdownModule,
  FilterItemModule,
} from '@pa-pos/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { CategoryFormComponent } from './category-form/category-form.component';
import { SharedDataAccessModule } from '@pa-pos/shared/data-access';

@NgModule({
  declarations: [CategoriesListComponent, CategoryFormComponent],
  imports: [
    CommonModule,
    SharedDataAccessModule,
    RouterModule.forChild([
      {
        path: '',
        component: CategoriesListComponent,
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
    DropdownModule,
    FilterItemModule,
  ],
})
export class CategoriesModule {}
