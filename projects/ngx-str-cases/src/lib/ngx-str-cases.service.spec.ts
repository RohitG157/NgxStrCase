import { TestBed } from '@angular/core/testing';

import { NgxStrCasesService } from './ngx-str-cases.service';

describe('NgxStrCasesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NgxStrCasesService = TestBed.get(NgxStrCasesService);
    expect(service).toBeTruthy();
  });
});
