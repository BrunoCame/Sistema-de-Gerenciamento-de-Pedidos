import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { NotaFiscal } from '../models/NotaFiscal';

@Injectable({
  providedIn: 'root',
})
export class NotafiscalService {
  private baseUrl = 'http://localhost:8080/api/notafiscal';

  constructor(private http: HttpClient) {}

  getPedidos(): Observable<NotaFiscal[]> | any {
    return this.http.get<NotaFiscal[]>(this.baseUrl);
  }

  getPedidosById(idPedido: number): Observable<NotaFiscal> | any {
    return this.http.get<NotaFiscal>(`${this.baseUrl}/${idPedido}`);
  }

  addPedido(pedido: NotaFiscal): Observable<any> {
    return this.http.post(this.baseUrl, pedido);
  }

  deletePedido(idPedido: number): Observable<void> {
    return this.http.delete<void>(`${this.baseUrl}/${idPedido}`);
  }
}
