import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndustryComponent } from './industry.component';
import { RouterModule, Routes } from '@angular/router';
import { SharedModule } from 'src/app/shared/shared.module';
import { IndustryGalleryComponent } from './components/industry-gallery/industry-gallery.component';
import { IndustryBrandsComponent } from './components/industry-brands/industry-brands.component';

const routes: Routes = [
  {
    path: '',
    component: IndustryComponent,
  },
];

@NgModule({
  declarations: [IndustryComponent, IndustryGalleryComponent, IndustryBrandsComponent, ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class IndustryModule {}
