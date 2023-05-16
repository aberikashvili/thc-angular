import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/HomeModule/home.module';
import { SharedModule } from './shared/shared.module';
import { WhoWeAreModule } from './modules/who-we-are/who-we-are.module';
import { CoreModule } from './core/core.module';
import { IndustryComponent } from './modules/industry/industry.component';
import { IndustryModule } from './modules/industry/industry.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, WhoWeAreModule, SharedModule, CoreModule, IndustryModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
