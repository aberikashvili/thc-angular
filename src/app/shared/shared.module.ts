import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DistributionCentreComponent } from '../modules/HomeModule/components/distribution-centre/distribution-centre.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, FooterComponent, DistributionCentreComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
