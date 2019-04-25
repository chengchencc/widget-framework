import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetIdeComponent } from './widget-ide.component';

describe('WidgetIdeComponent', () => {
  let component: WidgetIdeComponent;
  let fixture: ComponentFixture<WidgetIdeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetIdeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetIdeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
