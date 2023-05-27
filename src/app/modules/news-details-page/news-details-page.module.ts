import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Route, RouterModule, Routes } from '@angular/router';
import { NewsDetailsPageComponent } from './news-details-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { OurBrandssectionComponent } from './components/our-brandssection/our-brandssection.component';
const routes:Routes=[{
  path:"",
  component:NewsDetailsPageComponent
}]

@NgModule({
  declarations: [NewsDetailsPageComponent,OurBrandssectionComponent ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),SharedModule
  ]
})
export class NewsDetailsPageModule { }
