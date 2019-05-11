import { RouterReducerState } from '@ngrx/router-store';
import { IUserState, initializeUserState } from './user.state';
import { IAuthState, initializeAuthState } from './auth.state';
import { IFormTypeState, initialFormTypeState } from './formtype.state';

export interface IAppState{
    router? :RouterReducerState,
    users: IUserState,
    auth: IAuthState,
    form : IFormTypeState
}

export const initialAppState = {
    users: initializeUserState,
    auth: initializeAuthState,
    form : initialFormTypeState
};

