import {
  CdkPortal,
  DomPortalOutlet,
  Portal,
  PortalOutlet,
} from '@angular/cdk/portal';
import {
  AfterViewInit,
  ApplicationRef,
  Component,
  ComponentFactoryResolver,
  Injector,
  Input,
  OnDestroy,
  ViewChild,
} from '@angular/core';

@Component({
  selector: 'injectable-content[targetElId]',
  template: `
    <ng-template cdk-portal>
      <ng-content></ng-content>
    </ng-template>
  `,
  styles: [],
})
export class InjectableContentComponent implements AfterViewInit, OnDestroy {
  public constructor(
    private readonly componentFactoryResolver: ComponentFactoryResolver,
    private readonly injector: Injector,
    private readonly appRef: ApplicationRef
  ) {}

  private portalHost: PortalOutlet | null = null;
  @Input() public targetElId: string | null = null;
  @ViewChild(CdkPortal) public portal!: Portal<HTMLElement>;

  public ngAfterViewInit(): void {
    this.portalHost = new DomPortalOutlet(
      document.querySelector(`#${this.targetElId}`) as Element,
      this.componentFactoryResolver,
      this.appRef,
      this.injector
    );

    this.portalHost.attach(this.portal);
  }

  public ngOnDestroy(): void {
    if (this.portalHost) {
      this.portalHost.detach();
    }
  }
}
