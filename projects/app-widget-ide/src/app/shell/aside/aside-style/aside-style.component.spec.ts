import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideStyleComponent } from './aside-style.component';

describe('AsideStyleComponent', () => {
  let component: AsideStyleComponent;
  let fixture: ComponentFixture<AsideStyleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideStyleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideStyleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
