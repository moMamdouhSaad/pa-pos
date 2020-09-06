import { Component, ChangeDetectionStrategy } from '@angular/core';

@Component({
  // tslint:disable-next-line: component-selector
  selector: 'navbar-items',
  template: `
    <button
      class="navbar-toggler"
      type="button"
      data-toggle="collapse"
      data-target="#navbarNavDropdown"
      aria-controls="navbarText"
      aria-expanded="false"
      aria-label="Toggle navigation"
    >
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarNavDropdown">
      <ul class="navbar-nav">
        <ng-content></ng-content>
      </ul>
    </div>
  `,
  styleUrls: ['./navbar-items.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class NavbarItemsComponent {
  public constructor() {}
}
