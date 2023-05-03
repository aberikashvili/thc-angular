import { NgModule } from '@angular/core';
import { ButtonComponent } from './components/button/button.component';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { WhowearepageComponent } from '../modules/whowearepage/whowearepage.component';

@NgModule({
  declarations: [ButtonComponent, HeaderComponent, FooterComponent],
  imports: [CommonModule],
  exports: [CommonModule, ButtonComponent, HeaderComponent, FooterComponent,WhowearepageComponent],
})
export class SharedModule { }
