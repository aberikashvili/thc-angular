import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroSectionComponent } from './components/hero-section/hero-section.component';
import { StatisticsComponent } from './components/statistics/statistics.component';

import { StructureOfTheCompanyComponent } from './components/structure-of-the-company/structure-of-the-company.component';
import { RouterModule } from '@angular/router';
import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatSelectModule } from '@angular/material/select';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSidenavModule } from '@angular/material/sidenav';
import { NgIf } from '@angular/common';
import { HeaderResponsiveComponent } from './components/header/header-responsive/header-responsive.component';

@NgModule({
  declarations: [
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    StatisticsComponent,
    StructureOfTheCompanyComponent,
    HeaderResponsiveComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatDialogModule,
    MatButtonModule,
    MatSelectModule,
    MatFormFieldModule,
    MatSidenavModule,
    NgIf,
  ],
  exports: [
    CommonModule,
    ButtonComponent,
    HeaderComponent,
    FooterComponent,
    HeroSectionComponent,
    StatisticsComponent,
    StructureOfTheCompanyComponent,
  ],
})
export class SharedModule {}
