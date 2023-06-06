import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Pensamento } from '../model/pensamento.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PensamentoService {
  private readonly url = 'http://localhost:3000/pensamentos';

  constructor(private client: HttpClient) { }

  listar(): Observable<Pensamento[]> {
    return this.client.get<Pensamento[]>(this.url);
  }

  criar(pensamento: Pensamento): Observable<Pensamento> {
    return this.client.post<Pensamento>(this.url, pensamento);
  }

  editar(pensamento: Pensamento): Observable<Pensamento> {
    return this.client.put<Pensamento>(`${this.url}/${pensamento.id}`, pensamento);
  }

  excluir(id: number): Observable<Pensamento> {
    return this.client.delete<Pensamento>(`${this.url}/${id}`);
  }

  buscar(id: number): Observable<Pensamento> {
    return this.client.get<Pensamento>(`${this.url}/${id}`);
  }
}
