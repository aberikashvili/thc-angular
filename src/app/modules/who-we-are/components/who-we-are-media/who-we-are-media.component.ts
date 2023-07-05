import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-who-we-are-media',
  templateUrl: './who-we-are-media.component.html',
  styleUrls: ['./who-we-are-media.component.scss'],
})
export class WhoWeAreMediaComponent {
  tittle!: string;
  subtittle!: string;
  images!: string[];

  constructor(private _datasevice: DataService, private _cdr: ChangeDetectorRef) {}

  ngOnInit() {
    this._datasevice.getWhoWeAreMedia().subscribe((data) => {
      this.tittle = data.tittle;
      this.subtittle = data.subtittle;
      this.images = data.images;
      this._cdr.markForCheck();
    });
  }
}
