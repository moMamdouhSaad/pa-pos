import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ModalComponent } from './modal/modal.component';
import { ModalService } from './modal.service';
import { OverlayModule } from '@angular/cdk/overlay';
import { ModalPortalComponent } from './modal/modal-portal.component';

@NgModule({
  declarations: [ModalComponent, ModalPortalComponent],
  imports: [CommonModule, OverlayModule],
  exports: [ModalPortalComponent, ModalComponent],
  providers: [ModalService],
  entryComponents: [ModalPortalComponent],
})
export class ModalModule {}
