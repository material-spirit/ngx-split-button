import { TestBed } from '@angular/core/testing';

import { SplitButtonService } from './split-button.service';

describe('SplitButtonService', () => {
  let service: SplitButtonService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SplitButtonService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
