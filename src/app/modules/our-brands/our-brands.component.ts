import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.scss'],
})
export class OurBrandsComponent implements OnInit {
  tabsData: any = [];
  filteredCategoryData: any = [];

  ngOnInit(): void {
    this.getAllTabs();
    this.getCategoryByType();
  }

  getAllTabs() {
    this.tabsData = [
      { btnName: 'ALL BRANDS', active: 1, type: 'all' },
      { btnName: 'Food Import & Distribution', active: 0, type: '1' },
      { btnName: 'Import & Distribution of Toys, Tableware and Stationery', active: 0, type: '2' },
      { btnName: 'Supermarket Chain', active: 0, type: '3' },
      { btnName: 'Production', active: 0, type: '4' },
      { btnName: 'Construction / Property/ Development', active: 0, type: '5' },
    ];
  }

  getCategoryByType(type: string = 'all') {
    let categoryData = [
      { img: '/assets/images/shchinkhofer.png', type: '1', detailUrl: 'Details' },
      { img: '/assets/images/shchinkhofer.png', type: '1', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '1', detailUrl: 'Details' },
      { img: '/assets/images/shchinkhofer.png', type: '2', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '2', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '2', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '3', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '3', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '3', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '4', detailUrl: 'Details' },
      { img: '/assets/images/shchinkhofer.png', type: '4', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '4', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
      { img: '/assets/images/shchinkhofer.png', type: '5', detailUrl: false },
    ];

    if (type != 'all') {
      this.filteredCategoryData = categoryData.filter((item: any) => item.type == type);
    } else {
      this.filteredCategoryData = categoryData;
    }
  }

  btnClick(item: any) {
    this.tabsData.forEach((btn: any) => {
      btn.active = 0;
    });
    this.getCategoryByType(item.type);
    item.active = 1;
  }
}