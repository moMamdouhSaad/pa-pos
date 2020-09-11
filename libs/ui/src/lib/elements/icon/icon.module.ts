import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IconComponent } from './icon/icon.component';
import { InlineSVGModule } from 'ng-inline-svg';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [IconComponent],
  imports: [CommonModule, InlineSVGModule.forRoot(), HttpClientModule],
  exports: [IconComponent],
})
export class IconModule {}
