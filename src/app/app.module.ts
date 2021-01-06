import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import localeVi from '@angular/common/locales/vi';
import { MarkdownModule } from 'ngx-markdown';
import { SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

registerLocaleData(localeVi);

import { AppRoutingModule } from './app-routing.module';
import { AdminModule  } from './admin/admin.module';
import { AppComponent } from './app.component';
import { HeadWebComponent } from './head-web/head-web.component';
import { BodyBannerComponent } from './body-banner/body-banner.component';
import { BrandLogoComponent } from './brand-logo/brand-logo.component';
import { IntroLapAreaComponent } from './intro-lap-area/intro-lap-area.component';
import { FooterWebComponent } from './footer-web/footer-web.component';
import { NewLapAreaComponent } from './new-lap-area/new-lap-area.component';
import { LaptopComponent } from './laptop/laptop.component';
import { PageCategoryLapComponent } from './page-category-lap/page-category-lap.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { BodyCategoryPageComponent } from './body-category-page/body-category-page.component';
import { SidebarWebComponent } from './sidebar-web/sidebar-web.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { LaptopInCartComponent } from './laptop-in-cart/laptop-in-cart.component';
import { PageAddressOrderComponent } from './page-address-order/page-address-order.component';
import { ButtonCategogyBrandComponent } from './button-categogy-brand/button-categogy-brand.component';
import { ButtonCategoryTypeComponent } from './button-category-type/button-category-type.component';
import { PageProductDetailComponent } from './page-product-detail/page-product-detail.component';
import { ProductInfoComponent } from './product-info/product-info.component';
import { ProductIntroduceComponent } from './product-introduce/product-introduce.component';
import { ProductReviewComponent } from './product-review/product-review.component';
import { BrandPipe } from './pipes/brand.pipe';
import { OrderPipe } from './pipes/order.pipe';
import { FilterPipe } from './pipes/filter.pipe';
import { PageInfoAndPaymentMethodComponent } from './page-info-and-payment-method/page-info-and-payment-method.component';
import { SharedModule } from './shared/shared.module';
import { PageConfirmAccountComponent } from './page-confirm-account/page-confirm-account.component';

@NgModule({
  declarations: [
    AppComponent,
    HeadWebComponent,
    BodyBannerComponent,
    BrandLogoComponent,
    IntroLapAreaComponent,
    FooterWebComponent,
    NewLapAreaComponent,
    LaptopComponent,
    PageCategoryLapComponent,
    PageHomeComponent,
    PageNotFoundComponent,
    BodyCategoryPageComponent,
    SidebarWebComponent,
    PageCartComponent,
    LaptopInCartComponent,
    PageAddressOrderComponent,
    ButtonCategogyBrandComponent,
    ButtonCategoryTypeComponent,
    PageProductDetailComponent,
    ProductInfoComponent,
    ProductIntroduceComponent,
    ProductReviewComponent,
    BrandPipe,
    OrderPipe,
    FilterPipe,
    PageInfoAndPaymentMethodComponent,
    PageConfirmAccountComponent,
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    MarkdownModule.forRoot({
      sanitize: SecurityContext.NONE,
      loader: HttpClient
    }),
    FormsModule,
    SharedModule,
    AdminModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: 'vi-VI'},
    BrandPipe,
    FilterPipe
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
