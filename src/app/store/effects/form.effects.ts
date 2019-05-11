import {  FormService } from '../../applicationcore/services/form.service';
import { Injectable } from '@angular/core';
import { Actions, Effect, ofType } from '@ngrx/effects';
import { Observable } from 'rxjs';
import * as formActions from '../actions/form.actions';
import { map, withLatestFrom, switchMap } from 'rxjs/operators';
import { Store } from '@ngrx/store';
import { IAppState } from '../state/app.state';
import {AuthService} from '../../applicationcore/services/auth.service';
import {of } from 'rxjs';

@Injectable()
export class FormEffects {

  constructor(private actions$: Actions,
    private _formService : FormService) {}

    @Effect()
    authEffect$ = this.actions$.pipe(
       ofType<formActions.GetFormsType>(formActions.EFormActions.GetFormsType),
       switchMap(action => this._formService.getFormsType()),
       switchMap((result : any) => of(new formActions.LoadedSuccessfulGetFormsType(result)))
    );

}
