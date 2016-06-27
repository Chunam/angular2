import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';

import {Injectable} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Observable';

import {Hero} from '../hero';

import {Logger} from './logger.service';
import {BasiAuthHttpService} from './basic-auth-http.service';
import {HEROES} from './mock-heroes';

@Injectable()
export class HeroService {
  private baseUrl = 'https://localhost:8443/simple-jee7/rest/';
  private heroesUrl = this.baseUrl + 'heroes';
  private heroUrl = this.baseUrl + 'hero';

  constructor(private http: BasiAuthHttpService, private route: ActivatedRoute, private log: Logger) { }


  getHeroes(): Observable<Hero[]> {
    this.log.info('getting Heroes')
    // return Promise.resolve(HEROES);    
    return this.http.get(this.heroesUrl)      
      .catch(this.handleError);
  }

  getHero(id: number): Observable<Hero> {
    this.log.info('getting Heroe id : ' + id);
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    // headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    let url = this.heroUrl + '/' + id;
    return this.http
      .get(url, { headers: headers })
      .catch((res: Response) => this.failed(res));
  }

  failed(res: Response): Observable<Hero> {
    this.log.info(res.status + '');
    return (Observable.throw(res));
  }
  // Update existing Hero
  putHero(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroUrl}/${hero.id}`;

    return this.http.put(url, JSON.stringify(hero), {headers: headers})
      .toPromise()
      .then((res) => {
        this.log.info('hero saved, msg : ' + res.msg);
        return hero
      })
      //.catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ?
      error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    this.log.error(errMsg);  // log to console instead
    return Observable.throw(errMsg);
  }
}
