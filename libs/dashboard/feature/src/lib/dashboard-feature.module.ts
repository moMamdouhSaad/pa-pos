import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { InjectableContentModule } from '@pa-pos/ui';
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: DashboardComponent, path: '' }]),
    InjectableContentModule,
  ],
  declarations: [DashboardComponent],
})
export class DashboardFeatureModule {}
