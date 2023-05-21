import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-explorebrands',
  templateUrl: './explorebrands.component.html',
  styleUrls: ['./explorebrands.component.scss'],
})
export class ExplorebrandsComponent implements OnInit {
  ngOnInit(): void {
    this.filterData();
  }
  categoryData: any = []
   shinkhoferArray:any = [];

 

filterData(){
  this.shinkhoferArray = [
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true, detailUrl: 'Details' },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: true },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: false },
    { logo: '/assets/images/schirnhoferlogo.png', showOnMobileVersion: false },
  ];
}
}



