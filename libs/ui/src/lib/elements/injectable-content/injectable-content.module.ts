import { PortalModule } from '@angular/cdk/portal';

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InjectableContentComponent } from './injectable-content/injectable-content.component';

@NgModule({
  declarations: [InjectableContentComponent],
  imports: [CommonModule, PortalModule],
  exports: [InjectableContentComponent],
})
export class InjectableContentModule {}
