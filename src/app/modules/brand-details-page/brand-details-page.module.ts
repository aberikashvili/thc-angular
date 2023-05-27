import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandDetailsPageComponent } from './brand-detail-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
// import { BranddetailsComponent } from '../who-we-are/branddetails/branddetails.component';

const routes: Routes = [{ path: '', component: BrandDetailsPageComponent }];

@NgModule({
  declarations: [BrandDetailsPageComponent, ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class BrandDetailPageModule {}
