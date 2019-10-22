import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DisplayChefsComponent } from './display-chefs.component';

describe('DisplayChefsComponent', () => {
  let component: DisplayChefsComponent;
  let fixture: ComponentFixture<DisplayChefsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DisplayChefsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DisplayChefsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
