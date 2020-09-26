import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'pa-pos-basic-data',
  templateUrl: './basic-data.component.html',
  styleUrls: ['./basic-data.component.scss'],
})
export class BasicDataComponent implements OnInit {
  public constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}
  public currentTabName: string;

  public ngOnInit(): void {
    const url = this.router.url.split('/');
    this.currentTabName = url[2].split('?')[0];
  }

  public onTabClick(tabName: string): void {
    this.currentTabName = tabName;
  }
}
