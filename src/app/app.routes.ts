import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';

import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoreyComponent } from './features/categorey/components/categorey/categorey.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotfoundComponent } from './core/auth/components/notfound/notfound.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { MainLayoutComponent } from './core/layouts/main-layout/main-layout.component';
import { ProductListComponent } from './features/product/components/product-list/product-list.component';
import { BrandListComponent } from './features/Brand/components/brand-list/brand-list.component';
import { ProductDetailsComponent } from './features/product/components/product-details/product-details.component';

export const routes: Routes = [
  {
    path: '', component: MainLayoutComponent, children:
    [
      { path: '', redirectTo: 'home', pathMatch: 'full'},

        {path: 'home', component: HomeComponent},
        {path: 'categorey', component: CategoreyComponent},
        {path: 'cart', component: CartComponent},
        {path: 'product', component: ProductListComponent},
        {path: 'brands', component: BrandListComponent},
        {path: 'product-details/:id', component: ProductDetailsComponent},
        {path: '**', component: NotfoundComponent},

    ]
},

    {
        path: 'auth', component: AuthLayoutComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },


    {path:'**',component:NotfoundComponent }
];
