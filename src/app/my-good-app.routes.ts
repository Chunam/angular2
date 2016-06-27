import {RouterConfig, provideRouter} from '@angular/router';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {AuthGuard} from './routing/auth.guard';

export const routes: RouterConfig = [
  {path: '', component: HomeComponent}, {path: 'login', component: LoginComponent},
  {path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]},
  {path: 'heroes', component: HeroesComponent, canActivate: [AuthGuard] },
  {path: 'hero/:id', component: HeroDetailComponent, canActivate: [AuthGuard]}
];


export const APP_ROUTER_PROVIDERS = [
    provideRouter(routes),
    AuthGuard
];
