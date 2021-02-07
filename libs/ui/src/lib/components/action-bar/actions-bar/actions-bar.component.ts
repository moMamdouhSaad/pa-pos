import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'actions-bar',
  templateUrl: './actions-bar.component.html',
  styleUrls: ['./actions-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ActionsBarComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {}
}
