import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss'],
  providers: [],
})
export class TestComponent implements OnInit {
  public constructor() {}

  public ngOnInit(): void {}
}
