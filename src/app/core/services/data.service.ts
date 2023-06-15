import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Statistics } from 'src/app/shared/components/statistics/statistics.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }

  getStatisticsData(): Observable<Statistics> {
    return this._http.get<Statistics>('/api/statistics-section');
  }
}
