import { TestBed } from '@angular/core/testing';

import { GspWidgetChartjsService } from './gsp-widget-chartjs.service';

describe('GspWidgetChartjsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GspWidgetChartjsService = TestBed.get(GspWidgetChartjsService);
    expect(service).toBeTruthy();
  });
});
