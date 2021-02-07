import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActionsBarComponent } from './actions-bar/actions-bar.component';
import { ActionBarItemComponent } from './action-bar-item/action-bar-item.component';
import { FlexLayoutModule } from '@angular/flex-layout';
import { IconModule } from '../../elements';

@NgModule({
  declarations: [ActionsBarComponent, ActionBarItemComponent],
  imports: [CommonModule, FlexLayoutModule, IconModule],
  exports: [ActionsBarComponent, ActionBarItemComponent],
})
export class ActionBarModule {}
