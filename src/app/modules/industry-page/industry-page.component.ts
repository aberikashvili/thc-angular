import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-industry-page',
  templateUrl: './industry-page.component.html',
  styleUrls: ['./industry-page.component.scss'],
})
export class IndustryPageComponent implements OnInit {
  pageId!: string;
  pageText!: any;
  iconArray!: any[];
  dotArray: any[] = [1, 2, 3, 4, 5, 6, 7];

  constructor(private route: ActivatedRoute, private industryServices: DataService) {}

  ngOnInit(): void {
    this.getPageId();
    this.iconArrayData();
  }

  getPageId() {
    this.route.queryParams.subscribe((params) => {
      this.pageId = params['view'];
      this.getPageData(this.pageId);
    });
  }
  getPageData(pageId: string) {
    this.industryServices.getIndustrytPageData(pageId).subscribe((res) => {
      this.pageText = res;
      console.log(this.pageText);
    });
  }

  iconArrayData() {
    this.iconArray = [
      { name: 'YEAR', description: '2010' },
      { name: 'LABEL', description: '2010' },
      { name: 'LABEL', description: '2010' },
      { name: 'YEAR', description: '2010' },
      { name: 'LABEL', description: '2010' },
      {
        name: 'WEBSITE',
        description: 'Digitalinstitute.ge',
        img: '/assets/images/iconrow.svg',
        route: true,
      },
    ];
  }
}
