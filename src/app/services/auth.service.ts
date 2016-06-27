import {EventEmitter, Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Logger} from './logger.service';

@Injectable()
export class AuthService {
  private locationWatcher = new EventEmitter();
  private loginUrl = 'https://localhost:8443/simple-jee7/rest/login';

  constructor(private http: Http, private log: Logger) { log.info('Instantiating AuthService'); }

  private authenticated: boolean = false;
  private login: string = '';
  private password: string = '';

  public isAuthenticated(): boolean { return this.authenticated }
  public getLogin(): string { return this.login }
  public getPassword(): string { return this.password }

  public hasRole(roles: string[]): boolean { return false }

  public doLogin(userName: string, password: string) {
    //return Observable.of<boolean>(true).delay(1000).do(val => this.authenticated = true);
    this.log.info('doLogin');
    let headers = new Headers();
    headers.append('Authorization', 'Basic ' + btoa(userName + ':' + password));
    return this.http.get(this.loginUrl, { headers: headers })
      .map<boolean>((res) => this.processLoginResult.bind(this)(res, userName, password));
  }

  private processLoginResult(res: Response, userName: string, password) {
    if (res.json().success) {
      this.authenticated = true;
      this.login = userName;
      this.password = password;
    }
    return this.authenticated;
  }

  public subscribe(
    onNext: (value: any) => void, onThrow?: (exception: any) => void, onReturn?: () => void) {
    return this.locationWatcher.subscribe(onNext, onThrow, onReturn);
  }
}
