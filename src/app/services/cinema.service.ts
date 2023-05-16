import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CinemaService {

  constructor(private http: HttpClient) {}

  private baseUrl = 'http://localhost:8080';

  getFilmsByRegista(nome: string, cognome: string) {
    return this.http.get(`${this.baseUrl}/getFilmsByRegista/${nome}/${cognome}`);
  }

  getFilmsByAttore(nome: string, cognome: string) {
    return this.http.get(`${this.baseUrl}/getFilmsByAttore/${nome}/${cognome}`);

  }

  getMaxSaleNum(citta: string): Observable<number> {
    return this.http.get<number>(`${this.baseUrl}/maxSaleNum/${citta}`);
  }

  getFilmAndTotalSpettatoriByData(data: string) {
    return this.http.get<any[]>(`${this.baseUrl}/film-spettatori/${data}`);
  }
}
