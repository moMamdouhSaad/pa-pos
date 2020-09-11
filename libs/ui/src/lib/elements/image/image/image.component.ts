import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Input,
} from '@angular/core';

@Component({
  selector: 'image[width][src]',
  templateUrl: './image.component.html',
  styleUrls: ['./image.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ImageComponent implements OnInit {
  @Input() public src!: string;
  @Input() public width!: number;
  @Input() public placeholder: string | null = null;
  @Input() public isRounded = false;
  @Input() public background = 'gray-bg';

  public initialsFontSize: string | null = null;

  public ngOnInit(): void {
    switch (true) {
      case this.width <= 24:
        this.initialsFontSize = `${0.82}rem`;
        break;
      case this.width > 24 && this.width <= 38:
        this.initialsFontSize = `${0.94}rem`;
        break;
      case this.width > 38 && this.width <= 48:
        this.initialsFontSize = `${1.25}rem`;
        break;
      default:
        this.initialsFontSize = `${2}rem`;
        break;
    }
  }
}
