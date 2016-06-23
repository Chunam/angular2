import {Component, Input, OnInit} from '@angular/core';
import { Routes, RouteSegment, ROUTER_DIRECTIVES } from '@angular/router';
import { MD_CARD_DIRECTIVES } from '@angular2-material/card';
import { MD_BUTTON_DIRECTIVES } from '@angular2-material/button';
import {Hero} from '../hero';
import { HeroService } from '../services/hero.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit {

  constructor(
    private heroService: HeroService,
    private routeSegment: RouteSegment) {
  }

  // @Input()
  hero: Hero;

  ngOnInit() {
    let id = +this.routeSegment.getParam('id');
    this.heroService.getHero(id)
      // .then(
      // hero => this.hero = hero, fail => console.error('fail to retrieve datas'));
      .subscribe(hero => this.hero = hero);
  }
  
  goBack() {
    window.history.back();
  }

  save() {
    this.heroService.putHero(this.hero);
    this.goBack();
  }

}
