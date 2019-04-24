import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideEventComponent } from './aside-event.component';

describe('AsideEventComponent', () => {
  let component: AsideEventComponent;
  let fixture: ComponentFixture<AsideEventComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideEventComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideEventComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
