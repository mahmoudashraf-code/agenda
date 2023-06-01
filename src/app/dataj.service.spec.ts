import { TestBed } from '@angular/core/testing';

import { DatajService } from './dataj.service';

describe('DatajService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DatajService = TestBed.get(DatajService);
    expect(service).toBeTruthy();
  });
});
