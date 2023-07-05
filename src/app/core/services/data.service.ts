import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { CompanyStructureEntry } from 'src/app/shared/components/structure-of-the-company/company-structure-entry.model';
import { WhoWeAreStructure } from 'src/app/models/who-we-are-structure.model';

@Injectable({
  providedIn: 'root',
})
export class DataService {
  constructor(private _http: HttpClient) {}

  getData(): Observable<any> {
    return this._http.get('/api/service');
  }
  getWhoWeAreStructure(): Observable<WhoWeAreStructure>{
    return this._http.get<WhoWeAreStructure>('/api/whowearestructure');
  }

  getStructurePageData(): Observable<CompanyStructureEntry> {
    return this._http.get<CompanyStructureEntry>('/api/structure-company');
 
}
}
