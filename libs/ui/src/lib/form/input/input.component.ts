import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  AfterViewInit,
  ElementRef,
  ViewChild,
  Input,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
export type InputType = 'text' | 'email' | 'password' | 'tel' | 'number';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => InputComponent),
      multi: true,
    },
  ],
})
export class InputComponent implements ControlValueAccessor {
  public constructor(private readonly el: ElementRef<HTMLInputElement>) {}

  public value: string | number;

  @Input() public id: string;
  @Input() public label: string;
  @Input() public placeholder = '';
  @Input() public inputType: InputType = 'text';
  @Input() public isDisabled = false;
  @Input() public leftLabel: string | null = null;
  @Input() public helpText: string | null = null;
  @Input() public errMsg: string | null = null;

  private propagateChange = (_: string | number) => {};

  public writeValue(value: string | number): void {
    this.value = value;
  }

  public registerOnChange(fn: () => {}): void {
    this.propagateChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public onChange = (_value: string | number) => {
    this.value = _value;
    this.propagateChange(_value);
  };

  public onTouched = () => {};

  public hasValue(): boolean {
    return (
      !!this.value ||
      this.value === 0 ||
      (this.value && this.value['length'] && this.value['length'] > 0)
    );
  }

  public hasError(): boolean {
    return (
      this.el.nativeElement.classList.contains('ng-invalid') &&
      this.el.nativeElement.classList.contains('ng-touched') &&
      this.el.nativeElement.classList.contains('ng-dirty')
    );
  }
}
