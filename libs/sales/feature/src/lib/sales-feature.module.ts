import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { RouterModule } from '@angular/router';
import {
  InjectableContentModule,
  BoxModule,
  LevelModule,
  FormModule,
  ButtonModule,
  IconModule,
  TableModule,
} from '@pa-pos/ui';

@NgModule({
  imports: [
    CommonModule,
    InjectableContentModule,
    BoxModule,
    LevelModule,
    ButtonModule,
    FormModule,
    IconModule,
    TableModule,
    RouterModule.forChild([{ component: SalesComponent, path: '' }]),
  ],
  declarations: [SalesComponent],
})
export class SalesFeatureModule {}
