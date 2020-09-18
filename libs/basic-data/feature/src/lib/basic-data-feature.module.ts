import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BasicDataComponent } from './basic-data/basic-data.component';
import { RouterModule } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { TabsModule } from '@pa-pos/ui';
import { ItemsModule } from './items/items.module';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild([{ component: BasicDataComponent, path: '' }]),
    FlexLayoutModule,
    TabsModule,
    ItemsModule,
  ],
  declarations: [BasicDataComponent],
})
export class BasicDataFeatureModule {}
