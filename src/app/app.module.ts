import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeModule } from './modules/HomeModule/home.module';
import { SharedModule } from './shared/shared.module';
import { WhoWeAreModule } from './modules/who-we-are/who-we-are.module';
import { CoreModule } from './core/core.module';
import { IndustryModule } from './modules/industry/industry.module';
import { NewsModule } from './modules/news/news.module';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AppRoutingModule, HomeModule, WhoWeAreModule, SharedModule, CoreModule,NewsModule, IndustryModule],
  providers: [],
  bootstrap: [AppComponent],
})

export class AppModule {}
