import { OverlayRef } from '@angular/cdk/overlay';
import { TemplateRef, Type } from '@angular/core';
import { Subject } from 'rxjs';

export interface IModalCloseEvent<T> {
  type: 'backdrop' | 'close';
  data: T;
}

// tslint:disable-next-line:no-any
export type ModalContent = TemplateRef<any> | Type<any>;

// tslint:disable-next-line:no-any
export class ModalRef<T = any> {
  private readonly afterClosed = new Subject<IModalCloseEvent<T>>();
  public afterClosed$ = this.afterClosed.asObservable();

  public constructor(
    public overlayRef: OverlayRef,
    public content: ModalContent,
    public data: T
  ) {
    overlayRef.backdropClick().subscribe(() => this._close('backdrop', data));
  }

  public close(data?: T): void {
    this._close('close', data);
  }

  private _close(type: 'backdrop' | 'close', data?: T): void {
    this.overlayRef.dispose();
    if (data) {
      this.afterClosed.next({
        type,
        data,
      });
    }
    this.afterClosed.complete();
  }
}
