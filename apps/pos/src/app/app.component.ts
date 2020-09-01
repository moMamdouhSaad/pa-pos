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
    this.testInput2 = new FormControl('', Validators.required);
  }
  public links = ['Home', 'Products', 'Edit'];
  public testInput: FormControl;
  public testInput2: FormControl;
  public testArray = [
    { id: 1, name: 'Mohamed' },
    { id: 2, name: 'Ahmed' },
    { id: 3, name: 'Nour' },
  ];
  public testArray2 = ['ahmed', 'mohamed', 'saad'];

  public selectItem(event): void {}
  public testFunc(): void {
    console.log(this.testInput2.value);
  }
}
