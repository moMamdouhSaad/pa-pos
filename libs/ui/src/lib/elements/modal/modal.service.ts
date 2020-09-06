import { Injectable } from '@angular/core';
import { Overlay } from '@angular/cdk/overlay';
import { ComponentPortal } from '@angular/cdk/portal';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public constructor(private readonly overlay: Overlay) {}

  public showOverlay(component): void {
    const overlayRef = this.overlay.create({
      positionStrategy: this.overlay
        .position()
        .global()
        .centerHorizontally()
        .centerVertically(),
      hasBackdrop: true,
    });
    overlayRef.attach(new ComponentPortal(component));
  }
}
