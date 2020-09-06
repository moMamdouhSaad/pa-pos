import {
  Component,
  HostBinding,
  Input,
  ChangeDetectionStrategy,
  Renderer2,
  ElementRef,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'nav[navbar]',
  template: `<ng-content></ng-content>`,
  styleUrls: ['./navbar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarComponent {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  @Input() public set bgColor(color: string) {
    this.renderer.setStyle(this.el.nativeElement, 'background-color', color);
  }

  @HostBinding('class') public defaultClasses = 'navbar navbar-expand-lg';
  @HostBinding('class.navbar-light') @Input() public navbarLight = false;
  @HostBinding('class.navbar-dark') @Input() public navbarDark = false;
}
