import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Footer } from 'src/app/models/footer.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/services');
  }
  getFooter(): Observable<Footer> {
    return this._http.get<Footer>('/api/footer');
  }
}
