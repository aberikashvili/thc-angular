import { BranddetailsherosectionComponent } from '../brand-details-page/components/brand-details-hero-section/brand-details-hero-section.component';
import { BrandDetailsDescriptionSectionComponent } from './components/brand-details-description-section/brand-details-description-section.component';
import { NgModule } from '@angular/core';
import { BrandDetailsPageComponent } from './brand-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
const routes: Routes = [{ path: '', component: BrandDetailsPageComponent }];

@NgModule({
  declarations: [
    BrandDetailsPageComponent,
    BrandDetailsDescriptionSectionComponent,
    BranddetailsherosectionComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class BrandDetailPageModule {}
