import { TestBed, inject } from '@angular/core/testing';

import { RegistredTripService } from './registred-trip.service';

describe('RegistredTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegistredTripService]
    });
  });

  it('should be created', inject([RegistredTripService], (service: RegistredTripService) => {
    expect(service).toBeTruthy();
  }));
});
