import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalRef } from '@pa-pos/ui';

@Component({
  selector: 'pa-pos-item-form',
  templateUrl: './item-form.component.html',
  styleUrls: ['./item-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ItemFormComponent implements OnInit {
  public constructor(private readonly modalRef: ModalRef) {}

  public ngOnInit(): void {}

  public close(): void {
    this.modalRef.close();
  }
}
