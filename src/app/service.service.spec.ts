import { TestBed } from '@angular/core/testing';
import { myHttpService } from './service.service';

describe('ServiceService', () => {
  let service: myHttpService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(myHttpService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
