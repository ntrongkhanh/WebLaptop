import { CommonModule } from '@angular/common';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule, LOCALE_ID, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import { SecurityContext } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http'
import { FormsModule } from '@angular/forms';

import { AdminRoutes } from './admin-routing.module';
import { AdminComponent } from './admin.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageProductComponent } from './page-product/page-product.component';
import { PageOrdersComponent } from './page-orders/page-orders.component';
import { ProductViewComponent } from './components/product-view/product-view.component';

@NgModule({
  declarations: [AdminComponent, SidebarComponent, PageLoginComponent, PageProductComponent, PageOrdersComponent, ProductViewComponent],
  imports: [
    CommonModule,
    AdminRoutes,
    FormsModule
  ],
})

export class AdminModule { }
