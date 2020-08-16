import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';
import { AlertsColors } from '../../utils/utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'div[alertColor]',
  templateUrl: './alert.component.html',
  styleUrls: ['./alert.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AlertComponent {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  @Input() public set alertColor(color: AlertsColors) {
    this.renderer.addClass(this.el.nativeElement, 'alert');
    if (color && AlertsColors[color]) {
      this.renderer.addClass(this.el.nativeElement, AlertsColors[color]);
    }
  }
}
