import { Component } from '@angular/core';

@Component({
  selector: 'pa-pos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor() {}
  public links = ['Home', 'Products', 'Edit'];
}
