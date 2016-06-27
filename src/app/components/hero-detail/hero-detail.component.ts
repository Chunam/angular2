import {Component, Input, OnInit} from '@angular/core';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {Logger} from '../../services/logger.service';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [MD_CARD_DIRECTIVES, MD_BUTTON_DIRECTIVES]
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService, private route: ActivatedRoute, private log: Logger) { }

  // @Input()
  hero: Hero;

  ngOnInit() {
    // let id = +this.routeSegment.getParam('id');
    let id = 2;
    this.route.params
      .map(params => params['id'])
      .subscribe((id) => {
        this.heroService
          .getHero(id)          
          .subscribe(hero => this.hero = hero);
      });
  }

  goBack() { window.history.back(); }

  save() {
    this.heroService.putHero(this.hero)
    .then(hero => this.goBack())
    .catch((resp) => this.log.error(resp.status))
    ;
  }
}
