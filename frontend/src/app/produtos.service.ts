import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProdutosService {

  constructor(private http: HttpClient) { }


  // endpoint pra trazer os produtos
  listarProdutos(): Observable<any> {
    return this.http.get("http://localhost:8000/product");
  }



}
