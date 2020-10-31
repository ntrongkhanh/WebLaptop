import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeadWebComponent } from './head-web/head-web.component';
import { BodyBannerComponent } from './body-banner/body-banner.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { IntroLapAreaComponent } from './intro-lap-area/intro-lap-area.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { NewLapAreaComponent } from './new-lap-area/new-lap-area.component';
import { LaptopComponent } from './laptop/laptop.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadWebComponent,
    BodyBannerComponent,
    BrandLogoComponent,
    IntroLapAreaComponent,
    FooterWebComponent,
    NewLapAreaComponent,
    LaptopComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
