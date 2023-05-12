import { TestBed } from '@angular/core/testing';

import { ExternalconfigService } from './externalconfig.service';

describe('ExternalconfigService', () => {
  let service: ExternalconfigService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ExternalconfigService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
