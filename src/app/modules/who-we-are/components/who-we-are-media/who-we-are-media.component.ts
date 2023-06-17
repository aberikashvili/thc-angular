import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { WhoWEAreMedia } from 'src/app/models/whowearemedia.model';

@Component({
  selector: 'app-who-we-are-media',
  templateUrl: './who-we-are-media.component.html',
  styleUrls: ['./who-we-are-media.component.scss'],
})
export class WhoWeAreMediaComponent {
  title!: string;
  subTitle!: string;

  constructor(private _dataservice: DataService) {}

  ngOnInit(){
    this._dataservice.getMedia().subscribe((data) => {
      this.title = data.title;
      this.subTitle = data.subTitle;
    })
  }
}
