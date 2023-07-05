import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { BaseComponent } from 'src/app/shared/components/base.component';
import { BrandsDetails } from '../../brands-detail.model';
import { takeUntil } from 'rxjs';

@Component({
  selector: 'app-brand-details-description-section',
  templateUrl: './brand-details-description-section.component.html',
  styleUrls: ['./brand-details-description-section.component.scss'],
})
export class BrandDetailsDescriptionSectionComponent extends BaseComponent implements OnInit {
  pageData!: BrandsDetails[];
  constructor(private _dataService: DataService) {
    super();
  }
  ngOnInit() {
    this.loadData();
  }

  loadData() {
    this._dataService
      .getBrandsDetailsDescription()
      .pipe(takeUntil(this.destroy$$))
      .subscribe((res: any) => {
        this.pageData = res.description;
      });
  }
}
