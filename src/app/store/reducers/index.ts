import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../environments/environment';
import { IAppState } from '../state/app.state';
import { routerReducer } from '@ngrx/router-store';
import { userReducers } from './user.reducer';
import { authReducers } from './auth.reducer';



export const appReducers: ActionReducerMap<IAppState, any> = {
     router : routerReducer,
     users: userReducers,
     auth: authReducers,
     form : null
};


export const metaReducers: MetaReducer<IAppState,any>[] = !environment.production ? [] : [];
