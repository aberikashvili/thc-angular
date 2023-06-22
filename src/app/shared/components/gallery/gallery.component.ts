import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.scss'],
})
export class GalleryComponent {
  title!: string;
  subTitle!: string;
  images!: { image: string }[];

  constructor(private _dataservice: DataService, private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this._dataservice.getGallery().subscribe((data) => {
      this.title = data.title;
      this.subTitle = data.subTitle;
      this.images = data.images;
      this._cdr.markForCheck();
    });
  }
}
