import { TestBed } from '@angular/core/testing';

import { NgxSseService } from './ngx-sse.service';

describe('NgxSseService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxSseService = TestBed.get(NgxSseService);
    expect(service).toBeTruthy();
  });
});
