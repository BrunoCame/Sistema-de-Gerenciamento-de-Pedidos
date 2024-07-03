import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Produto } from '../models/Produto';

@Injectable({
  providedIn: 'root',
})
export class ProdutosService {
  private baseUrl = 'http://localhost:8080/api/produto';

  constructor(private http: HttpClient) {}

  getProdutos(): Observable<Produto[]> | any {
    return this.http.get<Produto[]>(this.baseUrl);
  }

  // addProduto(produto: Produto): Observable<Produto> {
  //   return this.http.post<Produto>(this.baseUrl, produto);
  // }

  getProdutoById(idproduto: number): Observable<Produto> {
    return this.http.get<Produto>(`${this.baseUrl}/${idproduto}`);
  }

  addProduto(produto: Produto): Observable<any> | any {
    return this.http.post(this.baseUrl, produto);
  }

  deleteProdutos(idProduto: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + idProduto);
  }
}
