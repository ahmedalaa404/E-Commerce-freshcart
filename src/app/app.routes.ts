import { Routes } from '@angular/router';
import { LoginComponent } from './core/auth/components/login/login.component';

import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoreyComponent } from './features/categorey/components/categorey/categorey.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotfoundComponent } from './core/auth/components/notfound/notfound.component';
import { AuthLayoutComponent } from './core/layouts/auth-layout/auth-layout.component';
import { UserComponent } from './core/layouts/user/user.component';

export const routes: Routes = [
    {
        path: 'auth', component: AuthLayoutComponent, children: [
            { path: '', redirectTo: 'login', pathMatch: 'full' },
            { path: 'login', component: LoginComponent },
            { path: 'register', component: RegisterComponent },
        ]
    },
    {
        path: 'user', component: UserComponent, children:
        [
            {path: 'home', component: HomeComponent},
            {path: 'categorey', component: CategoreyComponent},
            {path: 'cart', component: CartComponent},

        ]
    },

    {path:'**',component:NotfoundComponent }
];
