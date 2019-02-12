import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MakeDemoComponent } from './make-demo.component';

describe('MakeDemoComponent', () => {
  let component: MakeDemoComponent;
  let fixture: ComponentFixture<MakeDemoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MakeDemoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MakeDemoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
