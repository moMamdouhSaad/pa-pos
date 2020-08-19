import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CollabseComponent } from './collabse.component';

describe('CollabseComponent', () => {
  let component: CollabseComponent;
  let fixture: ComponentFixture<CollabseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [CollabseComponent],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CollabseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
