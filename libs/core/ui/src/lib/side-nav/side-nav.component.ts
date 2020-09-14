import {
  Component,
  OnInit,
  ViewChildren,
  QueryList,
  ElementRef,
} from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'side-nav',
  templateUrl: './side-nav.component.html',
  styleUrls: ['./side-nav.component.scss'],
})
export class SideNavComponent implements OnInit {
  public constructor() {}
  public hoveredIcon: string = 'red';

  public ngOnInit(): void {}
  public onHover(iconHovered): void {
    this.hoveredIcon = 'blue';
  }
  public onLeave(): void {
    console.log(this.hoveredIcon);
  }
}
