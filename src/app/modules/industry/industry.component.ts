import { Component, OnInit } from '@angular/core';
import { takeUntil } from 'rxjs';
import { DataService } from 'src/app/core/services/data.service';
import { BaseComponent } from 'src/app/shared/components/base.component';
import {
  IndustryBrands,
  IndustryBrandsAndGalleries,
  IndustryGallery,
} from './models/industry-brands-and-galleries.model';

@Component({
  selector: 'app-industry',
  templateUrl: './industry.component.html',
  styleUrls: ['./industry.component.scss'],
})
export class IndustryComponent extends BaseComponent implements OnInit {
  brandsData!: IndustryBrands;
  galeryData!: IndustryGallery;

  constructor(private _industryService: DataService) {
    super();
  }
  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
    this._industryService
      .getBrandsGalleryData()
      .pipe(takeUntil(this.destroy$$))
      .subscribe((res) => {
        this.brandsData = res.brands;
        this.galeryData = res.gallery;
      });
  }
}
