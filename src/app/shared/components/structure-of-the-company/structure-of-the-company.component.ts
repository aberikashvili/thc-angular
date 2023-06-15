import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { CompanyStructureEntry } from './company-structure-entry.model';

@Component({
  selector: 'app-structure-of-the-company',
  templateUrl: './structure-of-the-company.component.html',
  styleUrls: ['./structure-of-the-company.component.scss'],
})
export class StructureOfTheCompanyComponent implements OnInit {
  pageData!: CompanyStructureEntry;

  constructor(private _service: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this._service.getStructurePageData().subscribe((res) => {
      this.pageData = res;
    });
  }
}
