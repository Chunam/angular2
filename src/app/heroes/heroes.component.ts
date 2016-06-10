import {Component, OnInit} from '@angular/core';
import { Router } from '@angular/router-deprecated';

import {Hero} from '../hero';
import {HeroService} from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-heroes',
  templateUrl: 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
  directives: []
})
export class HeroesComponent implements OnInit {
  constructor(private router: Router, private heroService: HeroService) { }

  selectedHero: Hero;
  heroes: Hero[];

  getHeroes() {
    this.heroService.getHeroes().then(
      heroes => this.heroes = heroes, fail => console.error('fail to retrieve datas'));
  }

  ngOnInit() { this.getHeroes(); }

  onSelect(hero: Hero) { this.selectedHero = hero; }

  gotoDetail() {
    this.router.navigate(['HeroDetail', { id: this.selectedHero.id }]);
  }
}
