import { TestBed } from '@angular/core/testing';
import { VendedorService } from './vendedor.service';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpClient } from '@angular/common/http';

/*describe('VendedorService', () => {
  let service: VendedorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VendedorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});*/

describe('VendedorService', () => {

  let mockVendedorArray: any = [];

  let service: VendedorService;

  let httpController: HttpTestingController;

  let url = 'http://localhost:8080/api';

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpClientTestingModule, HttpClient]
    });
    service = TestBed.inject(VendedorService);
    httpController = TestBed.inject(HttpTestingController);
  });

  it('should call getAllVendedores and return an array of Vendedores', () => {

    service.getVendedores().subscribe((res) => {

      expect(res.length).toEqual(mockVendedorArray.length);
    });

    const req = httpController.expectOne({
      method: 'GET',
      url: `${url}/vendedores`,
    });

    req.flush(mockVendedorArray);
  });

})