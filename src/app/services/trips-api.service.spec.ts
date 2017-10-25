import { TestBed, inject } from '@angular/core/testing';

import { TripsApiService } from './trips-api.service';

describe('TripsApiService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TripsApiService]
    });
  });

  it('should be created', inject([TripsApiService], (service: TripsApiService) => {
    expect(service).toBeTruthy();
  }));
});
