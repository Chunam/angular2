import {beforeEachProviders, describe, expect, inject, it} from '@angular/core/testing';

import {HeroService} from './hero.service';

describe('Hero Service', () => {
  beforeEachProviders(() => [HeroService]);

  it('should ...',
     inject([HeroService], (service: HeroService) => { expect(service).toBeTruthy(); }));
});
