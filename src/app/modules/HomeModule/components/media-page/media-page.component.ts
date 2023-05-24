import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-media-page',
  templateUrl: './media-page.component.html',
  styleUrls: ['./media-page.component.scss'],
})
export class MediaPageComponent implements OnInit {
  ngOnInit(): void {
    this.filterData();
  }

  categoryData: any = [];
  upsidesectiongalery: any = [];

  filterData() {
    this.upsidesectiongalery = [
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: false },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: false },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
      { logo: '/assets/images/slider1.png', showOnMobileVersion: true },
    ];
  }
}
