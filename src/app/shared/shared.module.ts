import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { WhoWeAreComponent } from './components/who-we-are/who-we-are.component';


@NgModule({
  declarations: [ButtonComponent, HeaderComponent, FooterComponent, HomePageComponent, WhoWeAreComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, HeaderComponent, FooterComponent, HomePageComponent,WhoWeAreComponent],
})
export class SharedModule { }
