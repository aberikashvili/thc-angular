
import { BrandDetailsDescriptionSectionComponent } from './components/brand-details-description-section/brand-details-description-section.component'
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BrandDetailsPageComponent } from './brand-detail-page.component';
import { RouterTestingModule } from '@angular/router/testing';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', 
component: BrandDetailsPageComponent }];

@NgModule({
  declarations: [BrandDetailsPageComponent, BrandDetailsDescriptionSectionComponent,  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class BrandDetailPageModule {}
