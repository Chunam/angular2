import {Component, Input, OnInit} from '@angular/core';
import { RouteParams } from '@angular/router-deprecated';
import {Hero} from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private routeParams: RouteParams) {
  }

  @Input()
  hero: Hero;

  ngOnInit() {
    let id = +this.routeParams.get('id');
    this.heroService.getHero(id)
      .then(hero => this.hero = hero);
  }

  goBack() {
    window.history.back();
  }

}
