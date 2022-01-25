import { TestBed } from '@angular/core/testing';

import { PcxUiService } from './pcx-ui.service';

describe('PcxUiService', () => {
  let service: PcxUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PcxUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
