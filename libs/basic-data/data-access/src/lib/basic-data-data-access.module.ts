import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { SharedDataAccessModule } from '@pa-pos/shared/data-access';
@NgModule({
  imports: [CommonModule, HttpClientModule, SharedDataAccessModule],
  providers: [],
})
export class BasicDataDataAccessModule {}
