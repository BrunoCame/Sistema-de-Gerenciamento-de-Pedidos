import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Cliente } from '../models/Cliente';

@Injectable({
  providedIn: 'root',
})
export class ClientesService {
  private baseUrl = 'http://localhost:8080/api/cliente';

  constructor(private http: HttpClient) {}

  getClientes(): Observable<Cliente[]> | any {
    return this.http.get<Cliente[]>(this.baseUrl);
  }

  getClientesById(idcliente: number): Observable<Cliente> | any {
    return this.http.get<Cliente>(`${this.baseUrl}/${idcliente}`);
  }

  addCliente(cliente: Cliente): Observable<any> | any {
    return this.http.post(this.baseUrl, cliente);
  }

  deleteCliente(idUsuario: number): Observable<void> {
    return this.http.delete<void>(this.baseUrl + '/' + idUsuario);
  }
}
