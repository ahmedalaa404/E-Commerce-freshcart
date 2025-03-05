import { Routes } from '@angular/router';
import { AuthenticationComponent } from './core/layout/authentication/authentication.component';
import { UserComponent } from './core/layout/user/user.component';
import { LoginComponent } from './core/auth/components/login/login.component';

import { RegisterComponent } from './core/auth/components/register/register.component';
import { HomeComponent } from './features/home/components/home/home.component';
import { CategoreyComponent } from './features/categorey/components/categorey/categorey.component';
import { CartComponent } from './features/cart/components/cart/cart.component';
import { NotfoundComponent } from './core/auth/components/notfound/notfound.component';

export const routes: Routes = [
    {
        path: 'auth', component: AuthenticationComponent, children: [
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
