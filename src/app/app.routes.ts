import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';
import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoreyComponent } from './features/categorey/components/categorey/categorey.component';
import { NotfoundComponent } from './core/auth/components/notfound/notfound.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { BrandListComponent } from './features/Brand/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';
import { authGuard } from './core/guards/auth.guard';
import { isloggedGuard } from './core/guards/islogged.guard';
import { CartListComponent } from './features/cart/components/cart-list/cart-list.component';
import { CheckoutComponent } from './features/Orders/Component/checkout/checkout.component';
import { OrdersComponent } from './features/Orders/Component/orders/orders.component';


export const routes: Routes = [
  {
    path: '',
    component: AuthLayoutComponent,
    canActivate: [isloggedGuard],
    children: [
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: 'login', component: LoginComponent },
      { path: 'register', component: RegisterComponent },
    ],
  },

  {
    path: '',
    component: MainLayoutComponent,
    canActivate: [authGuard],
    children: [
      { path: '', redirectTo: 'home', pathMatch: 'full' },

      { path: 'home', component: HomeComponent },
      { path: 'categorey', component: CategoreyComponent },
      { path: 'cart', component: CartListComponent },
      { path: 'product', component: ProductListComponent },
      { path: 'brands', component: BrandListComponent },
      { path: 'Checkout/:id', component: CheckoutComponent   },
      { path: 'product-details/:id', component: ProductDetailsComponent },
      { path: 'allorders', component: OrdersComponent },
      

      { path: '**', component: NotfoundComponent },
    ],
  },

  { path: '**', component: NotfoundComponent },
];
