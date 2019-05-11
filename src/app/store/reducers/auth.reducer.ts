import { Action } from '@ngrx/store';
import { IAuthState, initializeAuthState } from '../state/auth.state';
import { AuthActions, EAuthctions } from '../actions/auth.actions';

export const authReducers = (
    state = initializeAuthState,
    action: AuthActions
): IAuthState => {

    switch (action.type) {
        case EAuthctions.LoggIn: {
            return {
                ...state
            }
        }

        case EAuthctions.LoggedSuccess:{
            return {
                ...state,
                auth : action.payload
            }
        }
        default:
            return state;
    }
};
