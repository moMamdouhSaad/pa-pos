import { NgModule } from '@angular/core';
import { ControlContainerComponent } from './control-container/control-container.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';
import { CheckboxComponent } from './checkbox/checkbox.component';
import { InputGroupComponent } from './input-group/input-group.component';

@NgModule({
  declarations: [ControlContainerComponent, InputComponent, SelectComponent, CheckboxComponent, InputGroupComponent],
  exports: [InputComponent, FormsModule, ReactiveFormsModule, SelectComponent, CheckboxComponent, InputGroupComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
