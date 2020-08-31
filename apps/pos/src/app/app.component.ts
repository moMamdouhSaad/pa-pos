import { Component } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'pa-pos-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  public constructor() {
    this.testInput = new FormControl('', [
      Validators.required,
      Validators.minLength(3),
    ]);
  }
  public links = ['Home', 'Products', 'Edit'];
  public testInput: FormControl;
}
