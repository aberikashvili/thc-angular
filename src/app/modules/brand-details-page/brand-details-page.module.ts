
import { BrandDetailsDescriptionSectionComponent } from './components/brand-details-description-section/brand-details-description-section.component'
import { NgModule } from '@angular/core';
import { BrandDetailsPageComponent } from './brand-detail-page.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { RouterModule, Routes } from '@angular/router';
import { WhoWeAreMediaComponent } from '../who-we-are/components/who-we-are-media/who-we-are-media.component';
const routes: Routes = [{ path: '', 
component: BrandDetailsPageComponent }];

@NgModule({
  declarations: [BrandDetailsPageComponent, BrandDetailsDescriptionSectionComponent,WhoWeAreMediaComponent, ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class BrandDetailPageModule {}
