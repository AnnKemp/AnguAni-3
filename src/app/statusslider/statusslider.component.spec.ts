import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StatussliderComponent } from './statusslider.component';

describe('StatussliderComponent', () => {
  let component: StatussliderComponent;
  let fixture: ComponentFixture<StatussliderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StatussliderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StatussliderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
