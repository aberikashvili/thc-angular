import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ExploreBrands } from 'src/app/models/explore-brands.model';
import { CompanyStructureEntry } from 'src/app/shared/components/structure-of-the-company/company-structure-entry.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }

  getStructurePageData(): Observable<CompanyStructureEntry> {
    return this._http.get<CompanyStructureEntry>('/api/structure-company');
  }
  getExploreBrands(): Observable<ExploreBrands> {
    return this._http.get<ExploreBrands>('/api/explore-brands');
  }
}
