import { TestBed } from '@angular/core/testing';

import { Log } from './log';

describe('Log', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: Log = TestBed.get(Log);
    expect(service).toBeTruthy();
  });
});
