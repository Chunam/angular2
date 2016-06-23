import {Component, OnInit} from '@angular/core';
import {Router, Routes, ROUTER_DIRECTIVES/*, ROUTER_PROVIDERS*/ } from '@angular/router';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {Hero} from './hero';
import {HeroService} from './services/hero.service';
import {Logger} from './services/logger.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';




@Component({
  moduleId: module.id,
  selector: 'my-good-app-app',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  templateUrl: 'my-good-app.component.html',
  styleUrls: ['my-good-app.component.css'],
  providers: [/*ROUTER_PROVIDERS,*/ HeroService, Logger]
})
@Routes([
  {
    path: '/detail/:id',
    component: HeroDetailComponent
  },
  {
    path: '/dashboard',
    component: DashboardComponent,
  },
  {
    path: '/heroes',
    component: HeroesComponent
  },
  {
    path: '',    
    component: HomeComponent
  },
  {
    path: '/login',    
    component: LoginComponent
  }
])
export class AppComponent implements OnInit {
  
  constructor(private router: Router) {
    if(!this.isLogged){
      this.router.navigate(['/login/']);
    }
  }
  
  title = 'Tour of Heroes';
  private isLogged = false;

  ngOnInit() {   }
}
