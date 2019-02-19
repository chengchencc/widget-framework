import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetCoreComponent } from './widget-core.component';

describe('WidgetCoreComponent', () => {
  let component: WidgetCoreComponent;
  let fixture: ComponentFixture<WidgetCoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetCoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetCoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
