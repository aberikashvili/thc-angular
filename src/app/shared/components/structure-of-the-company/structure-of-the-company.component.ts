import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { BaseComponent } from '../base.component';
import { DataService } from 'src/app/core/services/data.service';
import { CompanyStructureEntry } from './company-structure-entry.model';

@Component({
  selector: 'app-structure-of-the-company',
  templateUrl: './structure-of-the-company.component.html',
  styleUrls: ['./structure-of-the-company.component.scss'],
})
export class StructureOfTheCompanyComponent extends BaseComponent implements OnInit {
  pageData!: CompanyStructureEntry;

  constructor(private _dataService: DataService) {
    super();
  }

  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService
      .getStructurePageData()
      .pipe(takeUntil(this.destroy$$))
      .subscribe((res) => {
        this.pageData = res;
      });
  }
}
