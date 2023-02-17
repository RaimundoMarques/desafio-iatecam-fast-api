import { Injectable, EventEmitter, Output } from '@angular/core';
import { run } from 'node:test';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})

export class ServiceService {

  constructor(private _http: HttpClient) { }

  produtos = '/api/product'
  catetorias = '/api/category'

  urlProdutos(): Observable<any> {
    return this._http.get(`${this.produtos}`)
  }

  urlCategory(): Observable<any> {
    return this._http.get(`${this.catetorias}`)
  }

}
