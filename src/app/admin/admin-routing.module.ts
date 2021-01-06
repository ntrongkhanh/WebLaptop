import { Routes, RouterModule } from '@angular/router';
import { pathToFileURL } from 'url';
import { AdminComponent } from './admin.component';
import { PageLoginComponent } from './page-login/page-login.component';
import { PageOrdersComponent } from './page-orders/page-orders.component';
import { PageProductComponent } from './page-product/page-product.component';
import { AuthGuardService } from './services/auth-guard.service';

const routing: Routes = [
     {path: 'admin/login', component: PageLoginComponent},
     {path: 'admin/products', component: PageProductComponent, canActivate: [AuthGuardService]},
     {path: 'admin/orders' , component: PageOrdersComponent, canActivate: [AuthGuardService]},
     {path: 'admin', redirectTo: 'admin/login', pathMatch: 'full'},
     {path: 'admin/**', redirectTo: 'admin/login'}
]

export const AdminRoutes = RouterModule.forChild(routing);