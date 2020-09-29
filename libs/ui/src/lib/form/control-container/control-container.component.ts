import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Injector,
  ChangeDetectorRef,
  AfterViewInit,
  Input,
} from '@angular/core';
import { AbstractControl, NgControl } from '@angular/forms';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'control-container',
  templateUrl: './control-container.component.html',
  styleUrls: ['./control-container.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ControlContainerComponent implements OnInit, AfterViewInit {
  public constructor(
    private readonly injector: Injector,
    private readonly cdkRef: ChangeDetectorRef
  ) {}

  public isRequired = false;
  @Input() public label: string | null = null;
  @Input() public id: string | null = null;
  @Input() public toggleLabel: string | null = null;

  @Input() public leftLabel: string | null = null;
  @Input() public leftIcon: string | null = null;

  @Input() public helpText: string | null = null;
  @Input() public errMsg: string | null = null;

  public ngOnInit(): void {}
  public ngAfterViewInit(): void {
    // const childControl = this.injector.get<NgControl>(NgControl);
    // if (childControl) {
    //   this.control = childControl.control;
    //   this.isRequired = this.checkRequired();
    //   this.cdkRef.detectChanges();
    // }
  }
  // public checkRequired(): boolean {
  //   if (this.control.validator) {
  //     // tslint:disable-next-line: no-object-literal-type-assertion
  //     const validator = this.control.validator({} as AbstractControl);
  //     return validator && validator.required;
  //   }
  //   return false;
  // }
}
