import { Component } from '@angular/core';

@Component({
  selector: 'app-explorebrands',
  templateUrl: './explorebrands.component.html',
  styleUrls: ['./explorebrands.component.scss']
})
export class ExplorebrandsComponent {
tabsData: any = [];
  filteredCategoryData: any = [];

  ngOnInit(): void {
    this.getCategoryByType();
  }



  getCategoryByType(type: string = 'all') {
    let categoryData = [
      { img: '/assets/images/Group.png', type: '1', detailUrl: 'Details' },
      { img: '/assets/images/Group.png', type: '1', detailUrl: false },
      { img: '/assets/images/Group.png', type: '1', detailUrl: 'Details' },
      { img: '/assets/images/Group.png', type: '2', detailUrl: false },
      { img: '/assets/images/Group.png', type: '2', detailUrl: false },
      { img: '/assets/images/Group.png', type: '2', detailUrl: false },
      { img: '/assets/images/Group.png', type: '3', detailUrl: false },
      { img: '/assets/images/Group.png', type: '3', detailUrl: false },
      { img: '/assets/images/Group.png', type: '3', detailUrl: false },
      { img: '/assets/images/Group.png', type: '4', detailUrl: 'Details' },
      { img: '/assets/images/Group.png', type: '4', detailUrl: false },
      { img: '/assets/images/Group.png', type: '4', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
      { img: '/assets/images/Group.png', type: '5', detailUrl: false },
    ];
}
}
