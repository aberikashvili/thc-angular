import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StructureOfTheCompanyComponent } from './components/structure-of-the-company/structure-of-the-company.component';
import { RouterModule } from '@angular/router';
import { OurBrandsComponent } from '../modules/our-brands/our-brands.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    StatisticsComponent,
    StructureOfTheCompanyComponent,
    OurBrandsComponent,
  ],
  imports: [CommonModule, RouterModule],

  exports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    StatisticsComponent,
    StructureOfTheCompanyComponent,
    OurBrandsComponent,
  ],
})
export class SharedModule {}
