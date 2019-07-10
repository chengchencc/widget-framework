import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WidgetListPageComponent } from './widget-list-page.component';

describe('WidgetListPageComponent', () => {
  let component: WidgetListPageComponent;
  let fixture: ComponentFixture<WidgetListPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WidgetListPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WidgetListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
