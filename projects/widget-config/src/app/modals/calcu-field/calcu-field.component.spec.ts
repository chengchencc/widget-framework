import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CalcuFieldComponent } from './calcu-field.component';

describe('CalcuFieldComponent', () => {
  let component: CalcuFieldComponent;
  let fixture: ComponentFixture<CalcuFieldComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CalcuFieldComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CalcuFieldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
