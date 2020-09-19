import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'form-container',
  templateUrl: './form-container.component.html',
  styleUrls: ['./form-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormContainerComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
