import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PurchaseComponent } from './purchase/purchase.component';
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
import { PurchaseFormComponent } from './purchase-form/purchase-form.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: PurchaseComponent, path: '' }]),
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
  ],
  declarations: [PurchaseComponent, PurchaseFormComponent],
})
export class PurchaseFeatureModule {}
