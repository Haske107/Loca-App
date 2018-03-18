import { TestBed, inject } from '@angular/core/testing';

import { PermitinfoService } from './permitinfo.service';

describe('PermitinfoService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [PermitinfoService]
    });
  });

  it('should be created', inject([PermitinfoService], (service: PermitinfoService) => {
    expect(service).toBeTruthy();
  }));
});
