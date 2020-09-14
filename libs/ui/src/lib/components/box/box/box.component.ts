import {
  Component,
  Input,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  selector: 'box',
  templateUrl: './box.component.html',
  styleUrls: ['./box.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class BoxComponent {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  @Input() public set bgColor(color: string) {
    if (color) {
      this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
    }
  }

  @Input() public set width(value: string) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'width', value);
    }
  }

  @Input() public set height(value: string) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'height', value);
    }
  }

  @Input() public set radius(value: string) {
    if (value) {
      this.renderer.setStyle(this.el.nativeElement, 'border-radius', value);
    }
  }
}
