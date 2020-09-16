import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'pa-pos-sales',
  templateUrl: './sales.component.html',
  styleUrls: ['./sales.component.scss'],
})
export class SalesComponent implements OnInit {
  public constructor() {}
  public tableData = [
    { id: 1, class: 'test', section: 'section', name: 'paapy' },
    { id: 2, class: 'test', section: 'section', name: 'paapy' },
    { id: 3, class: 'test', section: 'section', name: 'paapy' },
    { id: 4, class: 'test', section: 'section', name: 'paapy' },
    { id: 5, class: 'test', section: 'section', name: 'paapy' },
    { id: 6, class: 'test', section: 'section', name: 'paapy' },
    { id: 7, class: 'test', section: 'section', name: 'paapy' },
    { id: 8, class: 'test', section: 'section', name: 'paapy' },
  ];

  public ngOnInit(): void {}
}
