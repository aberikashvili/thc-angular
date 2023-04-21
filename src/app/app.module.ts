import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FooterComponent } from './footer/footer.component';
import { OrangeButtonComponent } from './orange-button/orange-button.component';
import { BlueButtonComponent } from './blue-button/blue-button.component';

@NgModule({
  declarations: [
    AppComponent,
    FooterComponent,
    OrangeButtonComponent,
    BlueButtonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
