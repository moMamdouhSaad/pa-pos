import {
  Component,
  Input,
  Renderer2,
  OnInit,
  ChangeDetectionStrategy,
} from '@angular/core';

@Component({
  selector: 'icon',
  template: ` <i
    class="svg-icon"
    *ngIf="_icon"
    (onSVGInserted)="onSvgLoad($event)"
    [inlineSVG]="_icon"
  ></i>`,
  styleUrls: ['./icon.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class IconComponent {
  public constructor(private readonly renderer: Renderer2) {}
  public _icon: string | null = null;
  @Input() public set icon(icon: string) {
    if (icon) {
      this._icon = `/assets/svg/${icon}.svg`;
    }
  }
  @Input() public color: string | null = null;
  @Input() public size: number | null = null;
  @Input() public rotate: number | null = null;

  public onSvgLoad(svg: SVGElement): void {
    if (svg) {
      if (this.size) {
        this.renderer.setStyle(svg, 'width', this.size);
        this.renderer.setStyle(svg, 'height', this.size);
      }
      if (this.color) {
        this.renderer.setStyle(svg, 'fill', this.color);
        this.renderer.setStyle(svg, 'stroke', this.color);
      }
      if (this.rotate) {
        this.renderer.setStyle(svg, 'transform', `rotate(${this.rotate}deg)`);
      }
    }
  }
}
