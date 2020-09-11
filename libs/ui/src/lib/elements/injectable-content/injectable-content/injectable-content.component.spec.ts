import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { InjectableContentComponent } from './injectable-content.component';

describe('InjectableContentComponent', () => {
  let component: InjectableContentComponent;
  let fixture: ComponentFixture<InjectableContentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ InjectableContentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(InjectableContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
