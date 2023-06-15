import { Component, OnInit } from '@angular/core';
import { DistributionCenter } from './distributioncenter.model';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-distributioncenter',
  templateUrl: './distributioncenter.component.html',
  styleUrls: ['./distributioncenter.component.scss'],
})
export class DistributioncenterComponent implements OnInit {
  pageData!: DistributionCenter;

  constructor(private _service: DataService) {}

  ngOnInit(): void {
    this.getData();
  }

  getData() {
    this._service.getDistributionsCenterData().subscribe((res) => {
      this.pageData = res;
    });
  }
}
