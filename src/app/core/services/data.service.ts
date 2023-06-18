import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Gallery } from 'src/app/models/gallery.model';




@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }
  getGallery(): Observable<Gallery> {
    return this._http.get<Gallery>('/api/gallery');
  }
}
