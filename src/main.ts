import {enableProdMode, provide} from '@angular/core';
import { HTTP_PROVIDERS } from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { ROUTER_PROVIDERS } from '@angular/router';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {AuthService} from './app/services/auth.service';

import {AppComponent, environment} from './app/';

if (environment.production) {
  enableProdMode();
}

bootstrap(AppComponent, [HTTP_PROVIDERS, ROUTER_PROVIDERS /*, provide(LocationStrategy, { useClass: HashLocationStrategy })*/, AuthService]);
