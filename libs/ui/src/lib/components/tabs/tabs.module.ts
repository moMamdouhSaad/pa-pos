import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TabsComponent } from './tabs/tabs.component';
import { TabComponent } from './tab/tab.component';

import { FlexLayoutModule } from '@angular/flex-layout';
import { BadgeModule } from '../../elements';
@NgModule({
  declarations: [TabsComponent, TabComponent],
  imports: [CommonModule, FlexLayoutModule, BadgeModule],
  exports: [TabsComponent, TabComponent],
})
export class TabsModule {}
