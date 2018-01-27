/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { AuthGaurdServiceService } from './auth-gaurd-service.service';

describe('AuthGaurdServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthGaurdServiceService]
    });
  });

  it('should ...', inject([AuthGaurdServiceService], (service: AuthGaurdServiceService) => {
    expect(service).toBeTruthy();
  }));
});
