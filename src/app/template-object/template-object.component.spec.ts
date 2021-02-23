import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TemplateObjectComponent } from './template-object.component';

describe('TemplateObjectComponent', () => {
  let component: TemplateObjectComponent;
  let fixture: ComponentFixture<TemplateObjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TemplateObjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TemplateObjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
