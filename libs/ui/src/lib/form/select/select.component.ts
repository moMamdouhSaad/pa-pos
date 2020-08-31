import {
  Component,
  ChangeDetectionStrategy,
  forwardRef,
  ElementRef,
  Input,
  Output,
  EventEmitter,
} from '@angular/core';
import { NG_VALUE_ACCESSOR, ControlValueAccessor } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'pa-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => SelectComponent),
      multi: true,
    },
  ],
})
export class SelectComponent implements ControlValueAccessor {
  public constructor(private readonly el: ElementRef<HTMLInputElement>) {}

  public value: string | number | object;
  public _value: string | number | object;
  public autoCompleteValue: string;

  @Input() public id: string;
  @Input() public label: string;
  @Input() public key: string;
  @Input() public arrayList = [];
  @Input() public displayValue: string;
  @Input() public displayHolder: string;
  @Input() public placeholder = '';
  @Input() public leftLabel: string | null = null;
  @Input() public helpText: string | null = null;
  @Input() public errMsg: string | null = null;

  @Output() public readonly selectionChange = new EventEmitter<
    string | number | object | object[]
  >();
  public _onChange = (_value: string | number | object) => {};
  public onTouched = () => {};

  public writeValue(value: string | number | object): void {
    this.value = value && this.key ? value[this.key] : value;
    this._value = value && this.displayValue ? value[this.displayValue] : value;

    this.onChange(this.value);
  }

  public onChange($event: string | number | object): void {
    this._onChange($event);
    this.selectionChange.emit($event);
  }

  public registerOnChange(fn: () => {}): void {
    this._onChange = fn;
  }

  public registerOnTouched(fn: () => {}): void {
    this.onTouched = fn;
  }

  public onSelectValue(value: string | number | object): void {
    this.value = value && this.key ? value[this.key] : value;
    this._value = value && this.displayValue ? value[this.displayValue] : value;
    this.onChange(this.value);
  }

  public ontypeEvent($event): void {
    this.autoCompleteValue = $event.target.value;
  }
}
