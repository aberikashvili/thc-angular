import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent  {
  // constructor(private _dataService: DataService) {}

  // ngOnInit(): void {
  //   this._dataService.getData().subscribe((data) => {
  //     console.log(data);
  //   });
  // }
}
