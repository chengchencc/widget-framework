import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BstoastComponent } from './bstoast.component';

describe('BstoastComponent', () => {
  let component: BstoastComponent;
  let fixture: ComponentFixture<BstoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BstoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BstoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
