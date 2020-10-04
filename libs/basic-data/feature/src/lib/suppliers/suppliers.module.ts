import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SuppliersComponent } from './suppliers.component';
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
import { SharedDataAccessModule } from '@pa-pos/shared/data-access';
import { SupplierFormComponent } from './supplier-form/supplier-form.component';

@NgModule({
  declarations: [SuppliersComponent, SupplierFormComponent],
  imports: [
    CommonModule,
    RouterModule.forChild([
      {
        path: '',
        component: SuppliersComponent,
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
export class SuppliersModule {}
