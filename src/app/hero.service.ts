import {Injectable} from '@angular/core';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  constructor() {}

  getHeroes() { 
    console.log("getting Heroes")  
    return Promise.resolve(HEROES); 
  }
}
