import { TestBed } from '@angular/core/testing';

import { BibliotekService } from './bibliotek.service';

describe('BibliotekService', () => {
  let service: BibliotekService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BibliotekService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
