import { EUserActions, UserActions } from '../actions/user.actions';
import { IUserState, initializeUserState } from '../state/user.state';

export const userReducers = (
     state = initializeUserState,
     action : UserActions
 ): IUserState => {

    switch(action.type){
        case EUserActions.GetUsers:{
            return{
                ...state               
            }
        }
        default:
            return state;
    }
 };