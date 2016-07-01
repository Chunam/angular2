import {Component, Input, OnInit} from '@angular/core';
import { REACTIVE_FORM_DIRECTIVES, FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import {ROUTER_DIRECTIVES, ActivatedRoute} from '@angular/router';
import {MD_BUTTON_DIRECTIVES} from '@angular2-material/button';
import {MD_CARD_DIRECTIVES} from '@angular2-material/card';
import {MD_INPUT_DIRECTIVES} from '@angular2-material/input';

import {Hero} from '../../hero';
import {HeroService} from '../../services/hero.service';
import {AuthService} from '../../services/auth.service';
import {Logger} from '../../services/logger.service';
import {Protected} from '../../directives/protected.directive';

@Component({
  moduleId: module.id,
  selector: 'app-hero-detail',
  templateUrl: 'hero-detail.component.html',
  styleUrls: ['hero-detail.component.css'],
  directives: [
    REACTIVE_FORM_DIRECTIVES,
    MD_CARD_DIRECTIVES,
    MD_BUTTON_DIRECTIVES,
    MD_INPUT_DIRECTIVES,
    Protected]
})
export class HeroDetailComponent implements OnInit {

  constructor(private heroService: HeroService,
    private route: ActivatedRoute,
    private auth: AuthService,
    private log: Logger) { }

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
