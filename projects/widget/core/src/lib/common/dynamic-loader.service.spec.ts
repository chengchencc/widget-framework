import { TestBed } from '@angular/core/testing';

import { DynamicLoaderService } from './dynamic-loader.service';

describe('DynamicLoaderService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DynamicLoaderService = TestBed.get(DynamicLoaderService);
    expect(service).toBeTruthy();
  });
});
