import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { OrangeButtonComponent } from './components/button/orange-button/orange-button.component';
import { BlueButtonComponent } from './components/button/blue-button/blue-button.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, FooterComponent,  OrangeButtonComponent, BlueButtonComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, HeaderComponent, FooterComponent],
})
export class SharedModule {}
