import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReactivePersonaldataFormComponent } from './reactive-personaldata-form.component';

describe('ReactivePersonaldataFormComponent', () => {
  let component: ReactivePersonaldataFormComponent;
  let fixture: ComponentFixture<ReactivePersonaldataFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReactivePersonaldataFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ReactivePersonaldataFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
