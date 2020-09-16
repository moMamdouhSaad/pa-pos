import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'level',
  templateUrl: './level.component.html',
  styleUrls: ['./level.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class LevelComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
