import {Component, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, Router} from '@angular/router';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MdIcon, MdIconRegistry} from '@angular2-material/icon';
import {MD_LIST_DIRECTIVES} from '@angular2-material/list';
import {MD_TABS_DIRECTIVES} from '@angular2-material/tabs';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_TOOLBAR_DIRECTIVES} from '@angular2-material/toolbar';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Logger} from '../../services/logger.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [
    MD_TABS_DIRECTIVES,
    MD_LIST_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_TOOLBAR_DIRECTIVES,
    MdIcon],
  viewProviders: [MdIconRegistry]
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
