import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoxInputComponent } from './box-input.component';

describe('BoxInputComponent', () => {
  let component: BoxInputComponent;
  let fixture: ComponentFixture<BoxInputComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoxInputComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoxInputComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
