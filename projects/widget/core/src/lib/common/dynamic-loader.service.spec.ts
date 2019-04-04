import { TestBed } from '@angular/core/testing';

import { WidgetLoader } from '../loader/widget-loader';

describe('DynamicLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: WidgetLoader = TestBed.get(WidgetLoader);
    expect(service).toBeTruthy();
  });
});
