import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import {AuthActions, LoggInUsers, EAuthctions, LoggedUserSuccess } from '../actions/auth.actions';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import {AuthService} from '../../applicationcore/services/auth.service';
import {of } from 'rxjs';

@Injectable()
export class AuthenticateEffects {

  constructor(
    private actions$: Actions,
    private _store: Store<IAppState>,
    private _authService : AuthService) {}


  @Effect()
  authEffect$ = this.actions$.pipe(
     ofType<LoggInUsers>(EAuthctions.LoggIn),
     switchMap(action => this._authService.getAuthorizationToken()),
     switchMap((result : any) => of(new LoggedUserSuccess(result)))
  );

}
