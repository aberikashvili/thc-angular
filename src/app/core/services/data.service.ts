import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhoWEAreMedia } from 'src/app/models/whowearemedia.model';


@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }
  getMedia(): Observable<WhoWEAreMedia> {
    return this._http.get<WhoWEAreMedia>('/api/whowearemedia');
  }
}
