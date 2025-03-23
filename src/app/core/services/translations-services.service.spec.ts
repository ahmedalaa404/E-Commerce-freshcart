import { TestBed } from '@angular/core/testing';

import { TranslationsServicesService } from './translations-services.service';

describe('TranslationsServicesService', () => {
  let service: TranslationsServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TranslationsServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
