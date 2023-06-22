import { Component } from '@angular/core';
import { DataService } from 'src/app/core/services/data.service';

@Component({
  selector: 'app-our-brands',
  templateUrl: './our-brands.component.html',
  styleUrls: ['./our-brands.component.scss'],
})
export class OurBrandsComponent {
    title!: string;
    SubTitle!: string;
    brands!:string;
    fooDcaption!: string;
    toys!: string;
    chain!: string;
    production!: string;
    development!: string;
    images!:{"image":string,"text":string}[];

   constructor(private _dataservei:DataService ){}

   ngOnInit(){
    this._dataservei.getBrands().subscribe((data =>{
      this.title=data.title;
      this.SubTitle=data.SubTitle;
      this.brands=data.brands;
      this.fooDcaption=data.fooDcaption;
      this.toys=data.toys;
      this.chain=data.chain;
      this.production=data.production;
      this.development=data.development;
      this.categoryData=data.images;
    }))
   }

  tabsData: any = [
    { btnName: 'ALL BRANDS', active: 1, type: 'all' },
    { btnName: 'Food Import & Distribution', active: 0, type: '1' },
    { btnName: 'Import & Distribution of Toys, Tableware and Stationery', active: 0, type: '2' },
    { btnName: 'Supermarket Chain', active: 0, type: '3' },
    { btnName: 'Production', active: 0, type: '4' },
    { btnName: 'Construction / Property/ Development', active: 0, type: '5' },
  ];
  categoryData: any = [
  
  ];
  filterMode!: 'all' | number;

  get filteredData(): any[] {
    if (this.filterMode !== 'all' && this.filterMode) {
      return this.categoryData.filter((item: any) => item.type === this.filterMode);
    }

    return this.categoryData;
  }

  tabChanged(tabItem: any) {
    this.tabsData.forEach((btn: any) => {
      btn.active = false;
    });
    this.filterMode = tabItem.type;
    tabItem.active = true;
  }
}
