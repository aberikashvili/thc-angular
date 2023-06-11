import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-hero-section',
  templateUrl: './hero-section.component.html',
  styleUrls: ['./hero-section.component.scss'],
})
export class HeroSectionComponent implements OnInit {
  sliderPosition: number = 0;
  sliderPhotos: { text: string; image: string }[]=[];
  currentPhoto!: any;
  currentIndex: number = 0;

  constructor(private _dataservice: DataService) {}

  ngOnInit() {
    this.getSliderData();
  
  }

  title!: string;
  subtitle!: string;
  company!: string;
  descriptioncaption!: string;
  representcaption!: string;
  namecaption!: string;

  getSliderData() {
    
    this._dataservice.getHero().subscribe((data) => {
      this.title = data.title;
      this.company = data.company;
      this.subtitle = data.subtitle;
      this.descriptioncaption = data.descriptioncaption;
      this.representcaption = data.representcaption;
      this.namecaption = data.namecaption;
      this.sliderPhotos = data.photos;

      this.startSlider();
    });

  }

  startSlider() {
    this.currentPhoto = this.sliderPhotos[this.currentIndex];

    setInterval(() => {
      if (this.currentIndex == this.sliderPhotos.length - 1) {
        this.currentIndex = 0;
        this.sliderPosition = 0;
      } else {
        this.currentIndex++;
        this.sliderPosition += 20;
      }

      this.currentPhoto = this.sliderPhotos[this.currentIndex];
    }, 4000);
  }
}
