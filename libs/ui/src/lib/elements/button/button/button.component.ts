import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Renderer2,
  ElementRef,
  HostBinding,
} from '@angular/core';
import {
  BootstrapButtonMainColors,
  BootstrapButtonSizes,
  BootstrapButtonStates,
} from '../../../utils/utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[btnColor] ',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  @Input() public set btnColor(color: BootstrapButtonMainColors) {
    this.renderer.addClass(this.el.nativeElement, 'btn');
    if (color && BootstrapButtonMainColors[color]) {
      this.renderer.addClass(
        this.el.nativeElement,
        BootstrapButtonMainColors[color]
      );
    }
  }

  @Input() public set btnSize(size: BootstrapButtonSizes) {
    if (size && BootstrapButtonSizes[size]) {
      this.renderer.addClass(this.el.nativeElement, BootstrapButtonSizes[size]);
    }
  }

  @Input() public set btnState(state: BootstrapButtonStates) {
    if (state && BootstrapButtonStates[state]) {
      this.renderer.addClass(
        this.el.nativeElement,
        BootstrapButtonStates[state]
      );
    }
  }
}
