import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-structure-of-the-company',
  templateUrl: './structure-of-the-company.component.html',
  styleUrls: ['./structure-of-the-company.component.scss'],
})
export class StructureOfTheCompanyComponent implements OnInit {
  pageData: any;
  constructor(private service: DataService) {}

  ngOnInit() {
    this.getData();
  }

  getData() {
    this.service.getStructurePageData().subscribe((res) => {
      this.pageData = res;
    });
  }
}
