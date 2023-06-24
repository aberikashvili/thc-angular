import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { WhoWeAreHeroSection } from 'src/app/models/who-we-are-hero-section.model';
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
  getWhoWeAreHeroSection():Observable<WhoWeAreHeroSection>{
    return this._http.get<WhoWeAreHeroSection>('/api/who-we-are-hero-section');
  }
}
