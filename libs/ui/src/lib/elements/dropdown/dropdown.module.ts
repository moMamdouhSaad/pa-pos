import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DropdownComponent } from './dropdown.component';
import { DropdownItemComponent } from './dropdown-item.component';

@NgModule({
  declarations: [DropdownComponent, DropdownItemComponent],
  imports: [CommonModule],
  exports: [DropdownComponent, DropdownItemComponent],
})
export class DropdownModule {}
