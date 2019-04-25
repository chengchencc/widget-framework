import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideStyleFormListComponent } from './aside-style-form-list.component';

describe('AsideStyleFormListComponent', () => {
  let component: AsideStyleFormListComponent;
  let fixture: ComponentFixture<AsideStyleFormListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideStyleFormListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideStyleFormListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
