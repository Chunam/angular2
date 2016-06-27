import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Logger} from '../../services/logger.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: []
})
export class HeroesComponent implements OnInit {
  constructor(private router: Router, private heroService: HeroService, private log: Logger) {
    log.info('Instantiating HeroesComponent');
  }


  selectedHero: Hero;
  heroes: Hero[];

  getHeroes() {
    this.heroService.getHeroes().subscribe(
      heroes => this.heroes = heroes, fail => console.error('fail to retrieve datas'));
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() { this.router.navigate(['/hero/', this.selectedHero.id]); }
}
