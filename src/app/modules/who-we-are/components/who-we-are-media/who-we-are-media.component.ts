import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { BrandDetails } from 'src/app/models/brand-details-media.model';

@Component({
  selector: 'app-who-we-are-media',
  templateUrl: './who-we-are-media.component.html',
  styleUrls: ['./who-we-are-media.component.scss'],
})
export class WhoWeAreMediaComponent {
  title!: string;
  subTitle!: string;
  images!: string[];

  constructor(private _dataservice: DataService) {}

  ngOnInit() {
    this._dataservice.getMedia().subscribe((data: BrandDetails) => {
      this.title = data.title;
      this.subTitle = data.subTitle;
      this.images = data.images;
    });
  }
}
