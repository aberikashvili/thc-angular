import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Hero } from 'src/app/models/hero.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/services');
  }
  getHero(): Observable<Hero>{
    return this._http.get<Hero>("/api/hero")
  }
}
