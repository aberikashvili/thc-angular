import { ChangeDetectorRef, Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-who-we-are-structure',
  templateUrl: './who-we-are-structure.component.html',
  styleUrls: ['./who-we-are-structure.component.scss'],
})
export class WHOWEAREStructureComponent {
  title!: string;
  holdigtitle!: string;
  holdingDescription!: string;
  foodtitle!: string;
  foodDescription!: string;
  toytitle!: string;
  toyDescription!: string;
  supermarketitle!: string;
  supermarketDescription!: string;
  constructiontitle!: string;
  constructionDescription!: string;
  productiontitle!: string;
  productionDescription!: string;

  constructor(private _dataservice: DataService, private _cdr: ChangeDetectorRef) {}
  ngOnInit() {
    this._dataservice.getWhoWeAreStructure().subscribe((data) => {
      this.title = data.title;
      this.holdigtitle = data.holdingtitle;
      this.holdingDescription = data.holdingDescription;
      this.foodtitle = data.foodtitle;
      this.foodDescription = data.foodDescription;
      this.toytitle = data.toytitle;
      this.toyDescription = data.toyDescription;
      this.supermarketitle = data.supermarketitle;
      this.supermarketDescription = data.supermarketDescription;
      this.supermarketDescription = data.supermarketDescription;
      this.constructiontitle = data.constructiontitle;
      this.constructionDescription = data.constructionDescription;
      this.productiontitle = data.productiontitle;
      this.productionDescription = data.productionDescription;
      this._cdr.markForCheck();
    });
  }
}
