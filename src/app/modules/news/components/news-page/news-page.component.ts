import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { companyNewsPage } from '../../models/news.model';
import { takeUntil } from 'rxjs';
@Component({
  selector: 'app-news-page',
  templateUrl: './news-page.component.html',
  styleUrls: ['./news-page.component.scss'],
})
export class NewsPageComponent extends BaseComponent implements OnInit {
  pageData!: companyNewsPage;

  constructor(private _dataService: DataService) {
    super();
  }

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._dataService
      .getNewsPageData()
      .pipe(takeUntil(this.destroy$$))
      .subscribe((res) => {
        this.pageData = res;
        console.log(this.pageData);
      });
  }
}
