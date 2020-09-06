import { Component, OnInit } from '@angular/core';
import { ModalRef, ModalContent } from '../models/modal-ref';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-portal',
  template: ` <ng-container *ngComponentOutlet="content"></ng-container> `,
  styles: [
    `
      :host {
        display: block;
        width: inherit;
        height: inherit;
      }
    `,
  ],
})
export class ModalPortalComponent implements OnInit {
  public content: ModalContent | null = null;

  public constructor(public readonly modalRef: ModalRef) {}

  public ngOnInit(): void {
    this.content = this.modalRef.content;
  }
}
