import { ContentChild, Directive, Input, TemplateRef } from '@angular/core';

@Directive({
  // tslint:disable-next-line: directive-selector
  selector: '[paTableColumn]',
})
export class TableColumnDirective {
  @Input() public key: string | null = null;
  @Input() public header: string | null = null;
  @Input() public size: string | null = null;
  @Input() public enableFullObject = false;
  @Input() public classes: string | null = null;

  @ContentChild(TemplateRef) public template!: TemplateRef<unknown>;
}
