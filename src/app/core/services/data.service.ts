import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { companyNewsPage } from 'src/app/modules/news/models/news.model';
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

  getNewsPageData(): Observable<companyNewsPage> {
    return this._http.get<companyNewsPage>('/api/news-page');
  }
}
