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
    { id: 9, class: 'test', section: 'section', name: 'paapy' },
    { id: 10, class: 'test', section: 'section', name: 'paapy' },
    { id: 11, class: 'test', section: 'section', name: 'paapy' },
    { id: 12, class: 'test', section: 'section', name: 'paapy' },
    { id: 13, class: 'test', section: 'section', name: 'paapy' },
    { id: 14, class: 'test', section: 'section', name: 'paapy' },
    { id: 15, class: 'test', section: 'section', name: 'paapy' },
    { id: 16, class: 'test', section: 'section', name: 'paapy' },
    { id: 17, class: 'test', section: 'section', name: 'paapy' },
    { id: 18, class: 'test', section: 'section', name: 'paapy' },
    { id: 19, class: 'test', section: 'section', name: 'paapy' },
    { id: 20, class: 'test', section: 'section', name: 'paapy' },
    { id: 21, class: 'test', section: 'section', name: 'paapy' },
    { id: 22, class: 'test', section: 'section', name: 'paapy' },
    { id: 23, class: 'test', section: 'section', name: 'paapy' },
    { id: 24, class: 'test', section: 'section', name: 'paapy' },
  ];

  public ngOnInit(): void {}
}
