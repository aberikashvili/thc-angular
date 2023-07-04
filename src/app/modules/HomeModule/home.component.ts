import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent implements OnInit {
  constructor(private _dataService: DataService) {}

  ngOnInit(): void {
    this._dataService.getData().subscribe((data: any) => {
      console.log(data);
    });
  }
}
