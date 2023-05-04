import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
})
export class HomePageComponent implements OnInit {
  sliderPosition: number = 0;
  sliderPhotos: any = [];
  currentPhoto!: any;
  currentIndex: number = 0;

  constructor() {
  }

  ngOnInit() {
    this.getSliderData();
    this.startSlider();
  }

  getSliderData() {
    this.sliderPhotos = [
      {
        text: "Food Import", image: "/assets/slider1.png"
      },
      {
        text: "Food Import", image: "https://www.worldatlas.com/r/w1200/upload/0a/d3/22/shutterstock-716192545.jpg"
      },
      {
        text: "Food Import", image: "https://assets-api.kathmandupost.com/thumb.php?src=https://assets-cdn.kathmandupost.com/uploads/source/news/2020/opinion/shutterstock2903925921-1602176563.jpg&w=900&height=601",

      },
      {
        text: "Food Import", image: "https://media.premiumtimesng.com/wp-content/files/2019/08/food.jpg",
      },
      {
        text: "Food Import", image: "https://previews.agefotostock.com/previewimage/medibigoff/95c94fb8f0c26ef69b588beeccdacf0a/tip-081lsi05007.jpg",
      }
    ]
  }

  startSlider() {
    this.currentPhoto = this.sliderPhotos[this.currentIndex];

    setInterval(() => {
      if (this.currentIndex == (this.sliderPhotos.length - 1)) {
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





