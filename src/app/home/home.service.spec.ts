import { TestBed } from '@angular/core/testing';

import { HomeService } from './home.service';
import {
  HttpClientTestingModule,
  HttpTestingController,
} from '@angular/common/http/testing';

describe('HomeService', () => {
  let service: HomeService;
  let httpMock: HttpTestingController;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HomeService],
    });
    service = TestBed.inject(HomeService);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    httpMock.verify();
  });

  it('should delete all teams and players', () => {
    const url = 'http://localhost:8080/jogador/all';

    const mockResponse = {};

    service.deleteAll().subscribe((res) => {
      expect(res).toEqual(mockResponse);
    });

    const req = httpMock.expectOne(url);

    expect(req.request.method).toBe('DELETE');

    req.flush(mockResponse);
  });
});
