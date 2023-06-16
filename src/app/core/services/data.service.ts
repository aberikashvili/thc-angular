import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BrandDetails } from 'src/app/models/brand-details-media.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }

  getMedia(): Observable<BrandDetails> {
    return this._http.get<BrandDetails>('/api/branddetailsmedia');
  }
}
