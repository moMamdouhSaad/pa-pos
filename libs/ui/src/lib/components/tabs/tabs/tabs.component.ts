import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  selector: 'tabs',
  templateUrl: './tabs.component.html',
  styleUrls: ['./tabs.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TabsComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
