import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-who-we-are-structure',
  templateUrl: './who-we-are-structure.component.html',
  styleUrls: ['./who-we-are-structure.component.scss'],
})
export class WHOWEAREStructureComponent {
  title!: string;
  holdinTittle!: string;
  holdinDescription!: string;
  foodTittle!: string;
  foodDescription!: string;
  toyTittle!: string;
  toyDescription!: string;
  supermarketTittle!: string;
  supermarketDescription!: string;
  constructionTittle!: string;
  constructionDescription!: string;
  productionTittle!: string;
  productionDescription!: string;

  constructor(private _dataservice: DataService) {}
  ngOnInit(){
    this._dataservice.getWhoWeAreStructure().subscribe((data)=>{
      this.title =data.title ;
      this.holdinTittle= data.holdinTittle;
      this.holdinDescription =data.holdinDescription;
      this.foodTittle =data.foodTittle;
      this.foodDescription =data.foodDescription;
      this.toyTittle=data.toyTittle;
      this.toyDescription=data.toyDescription;
      this.supermarketTittle=data.supermarketTittle;
      this.supermarketDescription=data.supermarketTittle;
      this.supermarketDescription=data.supermarketDescription;
      this.constructionTittle=data.constructionTittle;
      this.constructionDescription=data.constructionDescription;
      this.productionTittle=data.constructionTittle;
      this.constructionDescription=data.constructionDescription;
    })
      

    
  }
}
