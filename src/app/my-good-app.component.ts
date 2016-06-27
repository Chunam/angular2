import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES /*, ROUTER_PROVIDERS*/, Router, RouterConfig} from '@angular/router';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_SIDENAV_DIRECTIVES} from '@angular2-material/sidenav';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

import {DashboardComponent} from './components/dashboard/dashboard.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HomeComponent} from './components/home/home.component';
import {LoginComponent} from './components/login/login.component';
import {Hero} from './hero';
import {AuthGuard} from './routing/auth.guard';
import {HeroService} from './services/hero.service';
import {Logger} from './services/logger.service';



@Component({
  moduleId: module.id,
  selector: 'my-good-app-app',
  directives: [ROUTER_DIRECTIVES, MD_SIDENAV_DIRECTIVES, MD_TOOLBAR_DIRECTIVES],
  templateUrl: 'my-good-app.component.html',
  styleUrls: ['my-good-app.component.css'],
  providers: [/*ROUTER_PROVIDERS,*/ HeroService]
})
export class AppComponent implements OnInit {
  constructor(private router: Router, private log: Logger) {
    log.info('Instantiating AppComponent');
  }

  title = 'Tour of Heroes';
  private isLogged = false;

  ngOnInit() {}
}
