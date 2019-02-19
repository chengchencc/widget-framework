import { TestBed } from '@angular/core/testing';

import { WidgetCoreService } from './widget-core.service';

describe('WidgetCoreService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetCoreService = TestBed.get(WidgetCoreService);
    expect(service).toBeTruthy();
  });
});
