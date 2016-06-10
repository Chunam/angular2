import {Component, OnInit} from '@angular/core';

import {Hero} from '../hero';
import {HeroDetailComponent} from '../hero-detail/hero-detail.component';
import {HeroService} from '../hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: [HeroDetailComponent]
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}

  selectedHero: Hero;
  heroes: Hero[];

  getHeroes() {
    this.heroService.getHeroes().then(
        heroes => this.heroes = heroes, fail => console.error('fail to retrieve datas'));
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }
}
