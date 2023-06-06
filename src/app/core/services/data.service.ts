import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, retry } from 'rxjs';
import { Header } from 'src/app/models/header.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/services');
  }
  getHeader():Observable<Header>{
    return this._http.get<Header>("/api/header")
  }
}
