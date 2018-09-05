import { TestBed, inject } from '@angular/core/testing';

import { Weatherv2Service } from './weatherv2.service';

describe('Weatherv2Service', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [Weatherv2Service]
    });
  });

  it('should be created', inject([Weatherv2Service], (service: Weatherv2Service) => {
    expect(service).toBeTruthy();
  }));
});
