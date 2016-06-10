import {Component, OnInit} from '@angular/core';
import { RouteConfig, ROUTER_DIRECTIVES, ROUTER_PROVIDERS } from '@angular/router-deprecated';
import {Hero} from './hero';
import {HeroService} from './services/hero.service';
import {HeroDetailComponent} from './hero-detail/hero-detail.component';
import {HeroesComponent} from './heroes/heroes.component';
import {DashboardComponent} from './dashboard/dashboard.component';




@Component({
  moduleId: module.id,
  selector: 'my-good-app-app',
  directives: [ROUTER_DIRECTIVES],
  templateUrl: 'my-good-app.component.html',
  styleUrls: ['my-good-app.component.css'],
  providers: [ROUTER_PROVIDERS, HeroService]
})
@RouteConfig([
  {
    path: '/detail/:id',
    name: 'HeroDetail',
    component: HeroDetailComponent
  },
  {
    path: '/dashboard',
    name: 'Dashboard',
    component: DashboardComponent,
    useAsDefault: true
  },
  {
    path: '/heroes',
    name: 'Heroes',
    component: HeroesComponent
  }
])
export class AppComponent implements OnInit {
  constructor(private heroService: HeroService) { }

  title = 'Tour of Heroes';

  ngOnInit() { }
}
