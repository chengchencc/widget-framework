import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideSettingComponent } from './aside-setting.component';

describe('AsideSettingComponent', () => {
  let component: AsideSettingComponent;
  let fixture: ComponentFixture<AsideSettingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideSettingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideSettingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
