import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-explorebrands',
  templateUrl: './explore-brands.component.html',
  styleUrls: ['./explore-brands.component.scss'],
})
export class ExplorebrandsComponent {
  title!: string;
  subtitle!: string;
  description!: string;
  images!: { image: string }[];

  constructor(private _dataservice:DataService){}

  ngOnInit(){
    this._dataservice.getExploreBrands().subscribe((data)=>{
      this.title=data.title;
      this.subtitle=data.subtitle;
      this.description=data.description;
      this.images=data.images
    })
  }
}
