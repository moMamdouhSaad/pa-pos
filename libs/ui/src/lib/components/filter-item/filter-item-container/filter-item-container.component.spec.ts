import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FilterItemContainerComponent } from './filter-item-container.component';

describe('FilterItemContainerComponent', () => {
  let component: FilterItemContainerComponent;
  let fixture: ComponentFixture<FilterItemContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FilterItemContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FilterItemContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
