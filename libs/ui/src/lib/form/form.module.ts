import { NgModule } from '@angular/core';
import { ControlContainerComponent } from './control-container/control-container.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';

@NgModule({
  declarations: [ControlContainerComponent, InputComponent, SelectComponent, CheckboxComponent],
  exports: [InputComponent, FormsModule, ReactiveFormsModule, SelectComponent, CheckboxComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
