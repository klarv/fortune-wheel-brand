import { TestBed, inject } from '@angular/core/testing';

import { PrizeService } from './prize.service';

describe('PrizeService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PrizeService]
    });
  });

  it('should be created', inject([PrizeService], (service: PrizeService) => {
    expect(service).toBeTruthy();
  }));
});
