import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SalesComponent } from './sales/sales.component';
import { RouterModule } from '@angular/router';
import { InjectableContentModule } from '@pa-pos/ui';

@NgModule({
  imports: [
    CommonModule,
    InjectableContentModule,
    RouterModule.forChild([{ component: SalesComponent, path: '' }]),
  ],
  declarations: [SalesComponent],
})
export class SalesFeatureModule {}
