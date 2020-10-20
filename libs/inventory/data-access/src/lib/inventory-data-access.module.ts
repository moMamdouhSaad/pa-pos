import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedDataAccessModule } from '@pa-pos/shared/data-access';

@NgModule({
  imports: [CommonModule, SharedDataAccessModule],
})
export class InventoryDataAccessModule {}
