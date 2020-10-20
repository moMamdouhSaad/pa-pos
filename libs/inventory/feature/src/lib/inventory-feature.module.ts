import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InventoryComponent } from './inventory/inventory.component';
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
  FilterItemModule,
} from '@pa-pos/ui';
import { FlexLayoutModule } from '@angular/flex-layout';
import { InventoryDataAccessModule } from '@pa-pos/inventory/data-access';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: InventoryComponent, path: '' }]),
    BoxModule,
    LevelModule,
    IconModule,
    TableModule,
    FormModule,
    ButtonModule,
    ModalModule,
    FormContainerModule,
    FilterItemModule,
    FlexLayoutModule,
    InventoryDataAccessModule,
  ],
  declarations: [InventoryComponent],
})
export class InventoryFeatureModule {}
