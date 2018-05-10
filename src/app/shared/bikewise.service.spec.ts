import { TestBed, inject } from '@angular/core/testing';

import { BikewiseService } from './bikewise.service';

describe('BikewiseService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BikewiseService]
    });
  });

  it('should be created', inject([BikewiseService], (service: BikewiseService) => {
    expect(service).toBeTruthy();
  }));
});
