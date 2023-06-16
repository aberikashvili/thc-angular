import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ourBrands } from 'src/app/models/our-brands.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }
  getBrands(): Observable<ourBrands>{
    return this._http.get<ourBrands>('/api/ourBrands');
  }
}
