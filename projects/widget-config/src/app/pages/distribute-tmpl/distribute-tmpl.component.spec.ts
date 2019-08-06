import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DistributeTmplComponent } from './distribute-tmpl.component';

describe('DistributeTmplComponent', () => {
  let component: DistributeTmplComponent;
  let fixture: ComponentFixture<DistributeTmplComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DistributeTmplComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DistributeTmplComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
