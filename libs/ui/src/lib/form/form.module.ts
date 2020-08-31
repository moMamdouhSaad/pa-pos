import { NgModule } from '@angular/core';
import { ControlContainerComponent } from './control-container/control-container.component';
import { InputComponent } from './input/input.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [ControlContainerComponent, InputComponent],
  exports: [InputComponent, FormsModule, ReactiveFormsModule],
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
})
export class FormModule {}
