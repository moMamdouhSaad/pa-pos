import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { ModalRef } from '@pa-pos/ui';

@Component({
  selector: 'pa-pos-category-form',
  templateUrl: './category-form.component.html',
  styleUrls: ['./category-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CategoryFormComponent implements OnInit {
  public constructor(private readonly modalRef: ModalRef) {}

  public ngOnInit(): void {}

  public close(): void {
    this.modalRef.close();
  }
}
