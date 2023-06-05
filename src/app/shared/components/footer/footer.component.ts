import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';
import { Footer } from 'src/app/models/footer.model';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})

export class FooterComponent { 

     company!: string;
     quicklinks!: string;
     socialnetwork!: string;
     contact!: string;
     whoweare!: string;
     industry!: string;
     ourbrands!: string;
     media!: string;
     news!: string;
     facebook!: string;
     linkedin!: string;
     youtube!: string;
     description!:string;
     caption!:string;
     phonecaption!: string;
     emailcaption!: string;
     rightscaption!: string;
     termscaption!: string;
     privacycaption!: string;


constructor(
  private _dataServeice:DataService){}

ngOninit(){
this._dataServeice.getFooter().subscribe((data)=>{
    this.company= data.company
    this.description=data.description
})
}

}
