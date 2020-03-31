import { TestBed } from '@angular/core/testing';

import { NumverifyService } from './numverify.service';

describe('NumverifyService', () => {
  let service: NumverifyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NumverifyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
