import { TestBed, inject } from '@angular/core/testing';
import { provideMockActions } from '@ngrx/effects/testing';
import { Observable } from 'rxjs';

import { AuthenticateEffects } from './authenticate.effects';

describe('AuthenticateEffects', () => {
  let actions$: Observable<any>;
  let effects: AuthenticateEffects;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        AuthenticateEffects,
        provideMockActions(() => actions$)
      ]
    });

    effects = TestBed.get(AuthenticateEffects);
  });

  it('should be created', () => {
    expect(effects).toBeTruthy();
  });
});
