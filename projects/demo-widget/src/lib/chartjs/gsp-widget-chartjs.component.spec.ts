import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GspWidgetChartjsComponent } from './gsp-widget-chartjs.component';

describe('GspWidgetChartjsComponent', () => {
  let component: GspWidgetChartjsComponent;
  let fixture: ComponentFixture<GspWidgetChartjsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GspWidgetChartjsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GspWidgetChartjsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
