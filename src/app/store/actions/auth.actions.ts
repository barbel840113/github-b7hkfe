import { Action } from '@ngrx/store';
import { IUser } from '../../applicationcore/interfaces/IUser';

export enum EAuthctions{
    LoggIn = '[Auth] Logged In', 
    LoggedSuccess = '[Auth] Logged User Successful'
}

export class LoggInUsers implements Action{
    public readonly type = EAuthctions.LoggIn;
}

export class LoggedUserSuccess implements Action{
    public readonly type = EAuthctions.LoggedSuccess;
    constructor(public payload: any){ }
}

export type AuthActions = LoggInUsers | LoggedUserSuccess;