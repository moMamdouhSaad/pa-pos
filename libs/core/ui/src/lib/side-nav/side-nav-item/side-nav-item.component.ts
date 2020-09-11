import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'side-nav-item',
  templateUrl: './side-nav-item.component.html',
  styleUrls: ['./side-nav-item.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SideNavItemComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
