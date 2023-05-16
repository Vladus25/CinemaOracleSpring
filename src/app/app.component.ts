import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { CinemaService } from './services/cinema.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'CinemaOracleSpring';

  films: any;
  data: any;
  filmSpettatori: any[] = [];
  registaNome: string = '';
  registaCognome: string = '';
  attoreNome: string = '';
  attoreCognome: string = '';
  maxSaleNum!: number;

  constructor(private http: CinemaService) {}

  getFilmsByRegista() {
    this.http.getFilmsByRegista(this.registaNome, this.registaCognome)
      .subscribe(films => {
        this.films = films;
      });
  }

  getFilmsByAttore() {
    this.http.getFilmsByAttore(this.attoreNome, this.attoreCognome)
      .subscribe(films => {
        this.films = films;
      });
  }

  getMaxSaleNum(citta: string) {
    this.http.getMaxSaleNum(citta)
      .subscribe(maxSaleNum => {
        this.maxSaleNum = maxSaleNum;
      });
  }

  getFilmAndTotalSpettatoriByData(data: any) {
    this.http.getFilmAndTotalSpettatoriByData(data)
      .subscribe(result => {
        this.filmSpettatori = result;
      });
  }
}
