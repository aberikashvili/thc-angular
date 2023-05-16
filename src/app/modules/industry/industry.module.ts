import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryComponent } from './industry.component';
import { IndustryBrandsGalleryComponent } from './components/industry-brands-gallery/industry-brands-gallery.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndustryGalleryComponent } from './components/industry-gallery/industry-gallery.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryComponent,
  },
];

@NgModule({
  declarations: [IndustryComponent,IndustryBrandsGalleryComponent, IndustryGalleryComponent, ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class IndustryModule {}
