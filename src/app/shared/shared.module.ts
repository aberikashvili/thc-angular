import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { DistributioncenterComponent } from '../modules/HomeModule/components/distributioncenter/distributioncenter.component';
@NgModule({
  declarations: [ButtonComponent, HeaderComponent, FooterComponent, DistributioncenterComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, HeaderComponent, FooterComponent,DistributioncenterComponent],
})
export class SharedModule {}
