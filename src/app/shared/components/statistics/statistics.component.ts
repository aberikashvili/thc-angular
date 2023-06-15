import { Component, OnInit } from '@angular/core';
import { Statistics } from './statistics.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-statistics',
  templateUrl: './statistics.component.html',
  styleUrls: ['./statistics.component.scss'],
})
export class StatisticsComponent implements OnInit {
  pageData!: Statistics;

  constructor(private _service: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._service.getStatisticsData().subscribe((res) => {
      this.pageData = res;
    });
  }
}
