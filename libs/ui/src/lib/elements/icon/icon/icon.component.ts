import {
  Component,
  Input,
  Renderer2,
  OnInit,
  ChangeDetectionStrategy,
  OnChanges,
  EventEmitter,
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
})
export class IconComponent implements OnChanges {
  public constructor(private readonly renderer: Renderer2) {}

  public _icon: string | null = null;
  public svg: SVGElement;
  @Input() public set icon(icon: string) {
    if (icon) {
      this._icon = `/assets/svg/${icon}.svg`;
    }
  }
  @Input() public color: string | null = null;
  @Input() public size: number | null = null;
  @Input() public rotate: number | null = null;

  public ngOnChanges(): void {
    if (this.svg) {
      this.renderer.setStyle(this.svg, 'fill', this.color);
      this.renderer.setStyle(this.svg, 'stroke', this.color);
    }
  }

  public onSvgLoad(svg: SVGElement): void {
    this.svg = svg;

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
