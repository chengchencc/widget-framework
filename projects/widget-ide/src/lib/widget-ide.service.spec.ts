import { TestBed } from '@angular/core/testing';

import { WidgetIdeService } from './widget-ide.service';

describe('WidgetIdeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetIdeService = TestBed.get(WidgetIdeService);
    expect(service).toBeTruthy();
  });
});
