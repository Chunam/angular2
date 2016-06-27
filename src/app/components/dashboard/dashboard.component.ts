import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {Protected} from '../../directives/protected.directive';
import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Logger} from '../../services/logger.service';


@Component({
  moduleId: module.id,
  selector: 'app-dashboard',
  templateUrl: 'dashboard.component.html',
  styleUrls: ['dashboard.component.css'],
  directives: [Protected]
})
export class DashboardComponent implements OnInit {
  heroes: Hero[] = [];
  constructor(private router: Router, private heroService: HeroService, private log: Logger) {
    log.info('Instantiating DashboardComponent');
  }

  ngOnInit() {
    this.heroService.getHeroes().toPromise().then(heroes => this.heroes = heroes.slice(1, 5));
  }

  gotoDetail(hero: Hero) {
    let link = ['/hero/', hero.id];
    this.router.navigate(link);
  }
}
