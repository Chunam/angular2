import {enableProdMode, provide} from '@angular/core';
import {HTTP_PROVIDERS} from '@angular/http';
import {bootstrap} from '@angular/platform-browser-dynamic';
import { disableDeprecatedForms, provideForms } from '@angular/forms';

import {AppComponent, environment} from './app/';
import {AppWideComponent} from './app/components/app-wide/app-wide.component';
import {APP_ROUTER_PROVIDERS} from './app/my-good-app.routes'
// import { ROUTER_PROVIDERS } from '@angular/router';
// import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import {AuthService} from './app/services/auth.service';
import {BasiAuthHttpService} from './app/services/basic-auth-http.service';
import {Logger} from './app/services/logger.service';

if (environment.production) {
  enableProdMode();
}

bootstrap(
  AppComponent,
  [
    disableDeprecatedForms(),
    provideForms(),
    HTTP_PROVIDERS,
    APP_ROUTER_PROVIDERS, /* provide(LocationStrategy, { useClass: HashLocationStrategy }), */
    AuthService,
    BasiAuthHttpService,
    Logger,
    AppWideComponent
  ]

);
