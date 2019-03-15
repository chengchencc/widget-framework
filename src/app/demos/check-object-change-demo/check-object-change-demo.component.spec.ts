import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CheckObjectChangeDemoComponent } from './check-object-change-demo.component';

describe('CheckObjectChangeDemoComponent', () => {
  let component: CheckObjectChangeDemoComponent;
  let fixture: ComponentFixture<CheckObjectChangeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CheckObjectChangeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CheckObjectChangeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
