import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FilterItemComponent } from './filter-item/filter-item.component';
import { FilterComponent } from './filter/filter.component';
import { IconModule } from '../../elements/icon/icon.module';
import { ButtonModule } from '../../elements/button/button.module';
import { ClickOutsideModule } from 'ng-click-outside';
import { FormModule } from '../../form/form.module';
import { FilterItemContainerComponent } from './filter-item-container/filter-item-container.component';
import { FormsModule } from '@angular/forms';
import { DropdownModule } from '../../elements';

@NgModule({
  declarations: [
    FilterItemComponent,
    FilterComponent,
    FilterItemContainerComponent,
  ],
  imports: [
    CommonModule,
    ButtonModule,
    IconModule,
    ButtonModule,
    ClickOutsideModule,
    FormsModule,
    FormModule,
    DropdownModule,
  ],
  exports: [FilterItemComponent, FilterComponent, FilterItemContainerComponent],
})
export class FilterItemModule {}
