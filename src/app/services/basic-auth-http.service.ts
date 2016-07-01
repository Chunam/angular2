import {Injectable} from '@angular/core';
import {Headers, Http, Response, URLSearchParams, RequestOptionsArgs} from '@angular/http';
import {Observable} from 'rxjs/Rx';

import {Hero} from '../hero';

import {Logger} from './logger.service';
import {AuthService} from './auth.service';
import {HEROES} from './mock-heroes';

@Injectable()
export class BasiAuthHttpService {

    constructor(private http: Http, private auth: AuthService, private log: Logger) {
        log.info('Instantiating BasiAuthHttpService');
    }


    get(url: string, options?: RequestOptionsArgs): Observable<any> {
        let _options: RequestOptionsArgs = this.getOptions(options);
        return this.http.get(url, _options).map(res => res.json());
    }

    put(url: string, body: any, options?: RequestOptionsArgs): Observable<any> {
        let _options: RequestOptionsArgs = this.getOptions(options);
        return this.http.put(url, body,  _options).map(res => res.json());
    }

    private getOptions(options?: RequestOptionsArgs): RequestOptionsArgs {
        if (options == null) {
            options = {};
        }
        let headers: Headers;
        headers = options.headers;
        if (headers == null) {
            headers = new Headers();
            options.headers = headers;
        }        
        // options.withCredentials = true;
        headers.append('Authorization', 'Basic ' + btoa(this.auth.login + ':' + this.auth.password));
        return options;
    }
}