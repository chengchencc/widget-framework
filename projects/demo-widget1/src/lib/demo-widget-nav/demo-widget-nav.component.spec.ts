import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DemoWidgetNavComponent } from './demo-widget-nav.component';

describe('DemoWidgetNavComponent', () => {
  let component: DemoWidgetNavComponent;
  let fixture: ComponentFixture<DemoWidgetNavComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DemoWidgetNavComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DemoWidgetNavComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
