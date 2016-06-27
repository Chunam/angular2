import {beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {AuthService} from './auth.service';

describe('Auth Service', () => {
  beforeEachProviders(() => [AuthService]);

  it('should ...',
     inject([AuthService], (service: AuthService) => { expect(service).toBeTruthy(); }));
});
