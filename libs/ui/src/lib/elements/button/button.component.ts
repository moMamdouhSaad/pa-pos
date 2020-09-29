import {
  Component,
  ChangeDetectionStrategy,
  Input,
  Renderer2,
  ElementRef,
  AfterViewInit,
  ViewChild,
} from '@angular/core';
import {
  BootstrapButtonMainColors,
  BootstrapButtonSizes,
  BootstrapButtonStates,
} from '../../utils/utils';
declare var $: any;

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'button[btnColor] ',
  template: '<ng-content></ng-content>',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent implements AfterViewInit {
  public constructor(
    private readonly renderer: Renderer2,
    private readonly el: ElementRef
  ) {}

  public ngAfterViewInit(): void {
    // $('[data-toggle="popover"]').popover();
    // document.addEventListener('mouseup', () => {
    //   const popover = document.getElementsByClassName('popover');
    //   if (popover.length > 0) {
    //     popover[0].remove();
    //   }
    // });
    // $('html').on('mouseup', function (e) {
    //   const l = $(e.target);
    //   if (l[0].className.indexOf('popover') == -1) {
    //     $('.popover').each(function () {
    //       $(this).popover('hide');
    //     });
    //   }
    // });
  }

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
