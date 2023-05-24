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
import { BaseComponent } from './components/base.component';
import { MediaPageComponent } from './components/media-page/media-page.component';


@NgModule({
  declarations: [
    BaseComponent,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    StatisticsComponent,
    StructureOfTheCompanyComponent,
    OurBrandsComponent,
    MediaPageComponent,
  ],
  imports: [CommonModule, RouterModule],
  exports: [
    CommonModule,
    BaseComponent,
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
