import { TestBed } from '@angular/core/testing';

import { AdapterHandlerService } from './adapter-handler.service';

describe('AdapterHandlerService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AdapterHandlerService = TestBed.get(AdapterHandlerService);
    expect(service).toBeTruthy();
  });
});
