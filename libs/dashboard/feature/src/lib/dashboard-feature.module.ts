import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import {
  InjectableContentModule,
  BoxModule,
  IconModule,
  ButtonModule,
} from '@pa-pos/ui';
import { ChartsModule } from 'ng2-charts';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: DashboardComponent, path: '' }]),
    FlexLayoutModule,
    InjectableContentModule,
    ChartsModule,
    BoxModule,
    IconModule,
    ButtonModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
