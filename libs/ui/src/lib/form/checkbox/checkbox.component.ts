import { Component, ChangeDetectionStrategy, Input } from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: CheckboxComponent,
      multi: true,
    },
  ],
})
export class CheckboxComponent implements ControlValueAccessor {
  public constructor() {}

  @Input() public label: string | null = null;
  @Input() public id: string | null = null;
  @Input() public name: string | null = null;
  @Input() public isDisabled: boolean = null;
  @Input() public value: boolean = null;
  @Input() public type: 'checkbox' | 'radio' = 'checkbox';

  public _value = false;

  public get checked(): boolean {
    return this._value || false;
  }
  public set checked(value: boolean) {
    this._value = value;
  }
  // tslint:disable-next-line: no-any
  public onChange = (event: any) => {
    this._value = event.target.value;
    this.onModelChange(event.target.value);
  };

  private onModelChange = (_value: boolean) => {};
  public onTouched = () => {};

  public writeValue(value: boolean): void {
    this._value = value;
  }
  public registerOnChange(fn: () => {}): void {
    this.onModelChange = fn;
  }
  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }
}
