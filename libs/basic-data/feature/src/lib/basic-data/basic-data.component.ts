import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-pos-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss'],
})
export class BasicDataComponent implements OnInit {
  public constructor() {}
  public currentTabName = 'items';

  public ngOnInit(): void {}

  public onTabClick(tabName: string): void {
    this.currentTabName = tabName;
  }
}
