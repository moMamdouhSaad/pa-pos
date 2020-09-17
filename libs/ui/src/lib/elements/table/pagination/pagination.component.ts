import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  Output,
  EventEmitter,
  Input,
} from '@angular/core';

@Component({
  selector: 'pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PaginationComponent implements OnInit {
  public constructor() {}

  @Output() public readonly next = new EventEmitter<number>();
  @Output() public readonly previous = new EventEmitter<number>();
  @Output() public readonly pageNumber = new EventEmitter<number>();

  @Input() public itemsPerPage;
  @Input() public dataLength;

  public currentRowIndex = 0;

  public ngOnInit(): void {}

  public getPagesNo(): number[] {
    return Array.from(
      Array(Math.round(this.dataLength / this.itemsPerPage)).keys()
    );
  }
  public goToPage(pageNo): void {
    this.currentRowIndex = pageNo * this.itemsPerPage;
    this.pageNumber.emit(this.currentRowIndex);
  }
  public onNext(): void {
    const currentRows = this.currentRowIndex + this.itemsPerPage;
    if (currentRows >= this.dataLength) {
      return;
    } else {
      this.next.emit((this.currentRowIndex += this.itemsPerPage));
    }
  }

  public onPrevious(): void {
    if (this.currentRowIndex - this.itemsPerPage < 0) {
      return;
    } else {
      this.previous.emit((this.currentRowIndex -= this.itemsPerPage));
    }
  }
}
