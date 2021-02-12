import { TestBed } from '@angular/core/testing';

import { MicrozonaService } from './microzona.service';

describe('MicrozonaService', () => {
  let service: MicrozonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MicrozonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
