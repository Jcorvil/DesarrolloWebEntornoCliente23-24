import { TestBed } from '@angular/core/testing';

import { ServiajaxService } from './serviajax.service';

describe('ServiajaxService', () => {
  let service: ServiajaxService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServiajaxService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
