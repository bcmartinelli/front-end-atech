import { TestBed, inject } from '@angular/core/testing';

import { RegisterTripService } from './register-trip.service';

describe('RegisterTripService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [RegisterTripService]
    });
  });

  it('should be created', inject([RegisterTripService], (service: RegisterTripService) => {
    expect(service).toBeTruthy();
  }));
});
