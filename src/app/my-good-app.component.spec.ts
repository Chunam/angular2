import {
  beforeEachProviders,
  describe,
  expect,
  it,
  inject
} from '@angular/core/testing';
import { MyGoodAppAppComponent } from '../app/my-good-app.component';

beforeEachProviders(() => [MyGoodAppAppComponent]);

describe('App: MyGoodApp', () => {
  it('should create the app',
      inject([MyGoodAppAppComponent], (app: MyGoodAppAppComponent) => {
    expect(app).toBeTruthy();
  }));

  it('should have as title \'my-good-app works!\'',
      inject([MyGoodAppAppComponent], (app: MyGoodAppAppComponent) => {
    expect(app.title).toEqual('my-good-app works!');
  }));
});
