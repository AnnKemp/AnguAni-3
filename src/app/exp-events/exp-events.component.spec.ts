import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExpEventsComponent } from './exp-events.component';

describe('ExpEventsComponent', () => {
  let component: ExpEventsComponent;
  let fixture: ComponentFixture<ExpEventsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExpEventsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ExpEventsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
