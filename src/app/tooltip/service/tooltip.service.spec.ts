import { TestBed, inject } from '@angular/core/testing';

import { TooltipService } from './tooltip.service';

describe('TooltipServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TooltipService]
    });
  });

  it('should be created', inject([TooltipService], (service: TooltipService) => {
    expect(service).toBeTruthy();
  }));
});
