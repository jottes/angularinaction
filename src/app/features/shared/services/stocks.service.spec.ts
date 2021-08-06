import { TestBed } from '@angular/core/testing';

import { StocksService } from './stocks.service';
import {HttpClientModule} from "@angular/common/http";

describe('StocksService', () => {
  let service: StocksService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [HttpClientModule]
    });
    service = TestBed.inject(StocksService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
