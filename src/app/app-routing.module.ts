import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { PageAddressOrderComponent } from './page-address-order/page-address-order.component';
import { PageCartComponent } from './page-cart/page-cart.component';
import { PageCategoryLapComponent } from './page-category-lap/page-category-lap.component';
import { PageHomeComponent } from './page-home/page-home.component';
import { PageInfoAndPaymentMethodComponent } from './page-info-and-payment-method/page-info-and-payment-method.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  {path: 'home', component: PageHomeComponent},
  {path: 'category-lap', component: PageCategoryLapComponent},
  {path: 'cart', component: PageCartComponent},
  {path: 'address-orther', component: PageAddressOrderComponent},
  {path: 'payment-method-and-info-order', component: PageInfoAndPaymentMethodComponent},
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
