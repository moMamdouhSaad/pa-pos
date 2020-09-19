import { Component, OnInit } from '@angular/core';
import { ModalRef, ModalContent } from '../models/modal-ref';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'modal-portal',
  template: `
    <div class="jw-modal">
      <ng-container *ngComponentOutlet="content"></ng-container>
    </div>

    <div class="jw-modal-background"></div>
  `,
  styles: [
    `
      :host {
        display: block;
        width: inherit;
        height: inherit;
        position: fixed;
        z-index: 1000;
      }

      .jw-modal {
        display: block;
        width: inherit;
        height: inherit;
        position: fixed;
        z-index: 1000;
      }

      .jw-modal-background {
        position: fixed;
        top: 0;
        right: 0;
        bottom: 0;
        left: 0;
        background-color: #000;
        opacity: 0.75;
        z-index: 900;
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
