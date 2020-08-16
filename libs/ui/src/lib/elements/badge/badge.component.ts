import {
  Component,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
  Input,
} from '@angular/core';
import { BadgeColors } from '../../utils/utils';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'badge[color]',
  template: '<ng-content></ng-content>',
  styleUrls: ['./badge.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BadgeComponent {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  @Input() public set color(color: BadgeColors) {
    this.renderer.addClass(this.el.nativeElement, 'badge');
    if (color && BadgeColors[color]) {
      this.renderer.addClass(this.el.nativeElement, BadgeColors[color]);
    }
  }
}
