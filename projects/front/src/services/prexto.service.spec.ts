import { TestBed } from '@angular/core/testing';

import { PrextoService } from './prexto.service';

describe('PrextoService', () => {
  let service: PrextoService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PrextoService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
