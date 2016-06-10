import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  constructor() { }

  getHeroes() {
    console.log("getting Heroes")
    return Promise.resolve(HEROES);
  }

  getHero(id: number) {
    console.log("getting Heroe id : " + id);
    return this.getHeroes()
      .then(heroes => heroes.filter(hero => hero.id === id)[0]);
  }
}
