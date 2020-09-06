import { Injectable, Injector } from '@angular/core';
import { Overlay, OverlayRef, OverlayConfig } from '@angular/cdk/overlay';
import { ComponentPortal, PortalInjector } from '@angular/cdk/portal';
import { IModalConfig, DEFAULT_MODAL_CONFIG } from './models/modal.model';
import { ModalContent, ModalRef } from './models/modal-ref';
import { ModalPortalComponent } from './modal/modal-portal.component';
@Injectable({
  providedIn: 'root',
})
export class ModalService {
  public constructor(
    private readonly overlay: Overlay,
    private readonly injector: Injector
  ) {}

  public showOverlay(
    config: IModalConfig<any> = {},
    content: ModalContent
  ): ModalRef<any> {
    const dialogConfig = { ...DEFAULT_MODAL_CONFIG, ...config };

    const overlayRef = this.createOverlay(dialogConfig);
    const modalRef = new ModalRef<any>(overlayRef, content, dialogConfig.data);

    const injector = this.attachPortal<any>(modalRef);

    // Create ComponentPortal that can be attached to a PortalHost
    const modalPortal = new ComponentPortal(
      ModalPortalComponent,
      null,
      injector
    );

    // Attach ComponentPortal to PortalHost
    overlayRef.attach(modalPortal);

    return modalRef;
  }
  private createOverlay<T>(config: IModalConfig<T>): OverlayRef {
    // Returns an OverlayConfig
    const overlayConfig = this.getModalOverlayConfig<T>(config);

    // Returns an OverlayRef
    return this.overlay.create(overlayConfig);
  }

  private getModalOverlayConfig<T>(config: IModalConfig<T>): OverlayConfig {
    const positionStrategy = this.overlay
      .position()
      .global()
      .centerHorizontally()
      .centerVertically();

    const overlayConfig = new OverlayConfig({
      hasBackdrop: config.hasBackdrop,
      backdropClass: config.backdropClass,
      panelClass: config.panelClass,
      scrollStrategy: this.overlay.scrollStrategies.block(),
      positionStrategy,
      width: config.width,
      height: config.height,
    });

    return overlayConfig;
  }

  private attachPortal<T>(ref: ModalRef<T>): PortalInjector {
    const tokens = new WeakMap([[ModalRef, ref]]);
    return new PortalInjector(this.injector, tokens);
  }
}
