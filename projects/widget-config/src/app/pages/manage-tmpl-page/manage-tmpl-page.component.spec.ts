import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageTmplPageComponent } from './manage-tmpl-page.component';

describe('ManageTmplPageComponent', () => {
  let component: ManageTmplPageComponent;
  let fixture: ComponentFixture<ManageTmplPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageTmplPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageTmplPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
