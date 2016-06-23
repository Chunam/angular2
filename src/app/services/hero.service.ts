import {Injectable} from '@angular/core';
import { Headers, Http, Response, URLSearchParams } from '@angular/http';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import 'rxjs/add/observable/throw';
import { Observable }     from 'rxjs/Observable';
import {HEROES} from './mock-heroes';
import {Logger} from './logger.service';
import {Hero} from '../hero';

@Injectable()
export class HeroService {
  private baseUrl = 'https://localhost:8443/simple-jee7/rest/';
  private heroesUrl = this.baseUrl + 'heroes';
  private heroUrl = this.baseUrl + 'hero';

  constructor(private http: Http, private log: Logger) { }


  getHeroes(): Observable<Hero[]> {
    console.log("getting Heroes")
    // return Promise.resolve(HEROES);
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa('user:user'));
    return this.http.get(this.heroesUrl, { headers: headers })
      .map(this.extractData)
      .catch(this.handleError);
  }

  private extractData(res: Response) {
    let body = res.json();
    return body || {};
  }

  getHero(id: number): Observable<Hero> {
    console.log("getting Heroe id : " + id);
    // let params: URLSearchParams = new URLSearchParams();
    // params.set('id', '' + id);
    let headers = new Headers(); 
    headers.append('Content-Type', 'application/json'); 
    headers.append('Access-Control-Allow-Origin', 'http://localhost:4200');
    
    return this.http.get(this.heroUrl, { headers: headers })
      // .subscribe(this.success, );
    .map(response => response.json() || {})
    // .toPromise().then(response => response.json() || {})
    .catch((res: Response) => this.failed(res));
    
  } 

  failed(res: Response) : Observable<Hero>  {
    this.log.info(res.status + '');
    return( Observable.throw( res ) ); 
  }
  // Update existing Hero
  putHero(hero: Hero) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');

    let url = `${this.heroUrl}/${hero.id}`;

    return this.http
      .put(url, JSON.stringify(hero), { headers: headers })
      .toPromise()
      .then((res) => { this.log.info("hero saved, msg : " + res.json().msg); return hero })
      .catch(this.handleError);
  }

  private handleError(error: any) {
    // In a real world app, we might use a remote logging infrastructure
    // We'd also dig deeper into the error to get a better message
    let errMsg = (error.message) ? error.message :
      error.status ? `${error.status} - ${error.statusText}` : 'Server error';
    this.log.error(errMsg); // log to console instead
    return Observable.throw(errMsg);
  }
}
