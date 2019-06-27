import { TestBed } from '@angular/core/testing';

import { DemoWidgetService } from './demo-widget.service';

describe('DemoWidgetService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemoWidgetService = TestBed.get(DemoWidgetService);
    expect(service).toBeTruthy();
  });
});
