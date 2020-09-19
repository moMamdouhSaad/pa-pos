import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormContainerComponent } from './form-container.component';
import { BoxModule } from '../box/box.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [FormContainerComponent],
  imports: [CommonModule, BoxModule, FlexLayoutModule],
  exports: [FormContainerComponent],
})
export class FormContainerModule {}
