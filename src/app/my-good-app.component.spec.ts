import {beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {AppComponent} from '../app/my-good-app.component';

beforeEachProviders(() => [AppComponent]);

describe('App: MyGoodApp', () => {
  it('should create the app',
     inject([AppComponent], (app: AppComponent) => { expect(app).toBeTruthy(); }));

  it('should have as title \'my-good-app works!\'', inject([AppComponent], (app: AppComponent) => {
       expect(app.title).toEqual('my-good-app works!');
     }));
});
