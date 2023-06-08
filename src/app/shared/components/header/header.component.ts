import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Header } from 'src/app/models/header.model';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  dropdownPopoverShow = false;
  showNavbar: boolean = false;
  showMobileMenu: boolean = false;
  showIndusrtyMenu: boolean = false;
  
  onbuttonclick() {}

     foodcaption!: string;
     distributioncaption!: string;
     supermarketcaption!: string;
     constructioncaption!: string;
     productioncaption!: string;
  
  
   constructor(private _dataservice:DataService ){}


   ngOnInit(){
         this._dataservice.getHeader().subscribe((data):void => {
           this.foodcaption = data.foodcaption;
           this.distributioncaption = data.distributioncaption;
           this.supermarketcaption = data.supermarketcaption;
           this.constructioncaption = data.constructioncaption;
           this.productioncaption = data.productioncaption;
         });
   }
}
