import { Component } from '@angular/core';

@Component({
  selector: 'app-explorebrands',
  templateUrl: './explorebrands.component.html',
  styleUrls: ['./explorebrands.component.scss'],
})
export class ExplorebrandsComponent {
  categoryData: any = [
    { img: '/assets/images/Group.png', type: '1', detailUrl: false },
    { img: '/assets/images/Group.png', type: '1', detailUrl: false },
    { img: '/assets/images/Group.png', type: '1', detailUrl: false },
    { img: '/assets/images/Group.png', type: '2', detailUrl: 'Details' },
    { img: '/assets/images/Group.png', type: '2', detailUrl: false },
    { img: '/assets/images/Group.png', type: '2', detailUrl: false },
    { img: '/assets/images/Group.png', type: '3', detailUrl: false },
    { img: '/assets/images/Group.png', type: '2', detailUrl: false },
  ];

  // ngOnInit(): void {
  //   this.getCategoryByType();
  // }

  // getCategoryByType() {
  //   let categoryData = [
  //     { img: '/assets/images/Group.png', type: '1', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '1', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '1', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '2', detailUrl: 'Details' },
  //     { img: '/assets/images/Group.png', type: '2', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '2', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '3', detailUrl: false },
  //     { img: '/assets/images/Group.png', type: '2', detailUrl: false },
  //   ];
  // }
}
