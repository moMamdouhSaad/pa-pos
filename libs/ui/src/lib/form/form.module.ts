import { NgModule } from '@angular/core';
import { ControlContainerComponent } from './control-container/control-container.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { SelectComponent } from './select/select.component';

@NgModule({
  declarations: [ControlContainerComponent, InputComponent, SelectComponent],
  exports: [InputComponent, FormsModule, ReactiveFormsModule, SelectComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
