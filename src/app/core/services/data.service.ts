import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { DistributionCenter } from 'src/app/modules/HomeModule/components/distributioncenter/distributioncenter.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }

  getDistributionsCenterData(): Observable<DistributionCenter> {
    return this._http.get<DistributionCenter>('/api/distributions-center');
  }
}
