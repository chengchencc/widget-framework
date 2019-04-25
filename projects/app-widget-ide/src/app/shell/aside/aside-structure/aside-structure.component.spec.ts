import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AsideStructureComponent } from './aside-structure.component';

describe('AsideStructureComponent', () => {
  let component: AsideStructureComponent;
  let fixture: ComponentFixture<AsideStructureComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AsideStructureComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AsideStructureComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
