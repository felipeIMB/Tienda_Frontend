import { Injectable } from '@angular/core';
import { VENDEDORES } from './vendedores.json';
import { Vendedor } from './vendedor';
import { Observable } from 'rxjs';
import { of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})

export class VendedorService {

  private urlEndPoint: string = 'http://localhost:8080/api/vendedores'

  constructor(private http: HttpClient) { }

  getVendedores(): Observable<Vendedor[]> {
    //return of (VENDEDORES);
    return this.http.get(this.urlEndPoint).pipe(
      map((resp: any) => {

        if (resp.vendedores === undefined) {
          return [];
        } else {
          return resp.vendedores;
        }
      })
    )
  }
}