import { Component, OnInit } from '@angular/core';
import { ModalRef } from '@pa-pos/ui';

@Component({
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [],
})
export class TestComponent implements OnInit {
  public constructor(private readonly modalRef: ModalRef) {}

  public ngOnInit(): void {
    console.log(this.modalRef.data);
  }
}
