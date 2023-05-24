import { NgModule } from '@angular/core';

import { RouterModule, Routes } from '@angular/router';
import { WHOWEAREStructureComponent } from './components/who-we-are-structure/who-we-are-structure.component';
import { WhoWeAreMediaComponent } from './components/who-we-are-media/who-we-are-media.component';
import { WhoWeAreHeroSectionComponent } from './components/who-we-are-hero-section/who-we-are-hero-section.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { WhoWeAreComponent } from './who-we-are.component';
import { OurBrandssectionComponent } from './our-brandssection/our-brandssection.component';

const routes: Routes = [
  {
    path: '',
    component: WhoWeAreComponent,
  },
];

@NgModule({
  declarations: [
    WhoWeAreComponent,
    WHOWEAREStructureComponent,
    WhoWeAreMediaComponent,
    WhoWeAreHeroSectionComponent,
    OurBrandssectionComponent,
  ],
  imports: [RouterModule.forChild(routes), SharedModule],
})
export class WhoWeAreModule {}
