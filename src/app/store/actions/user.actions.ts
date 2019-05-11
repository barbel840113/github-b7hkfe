import { Action } from '@ngrx/store';
import { IUser } from '../../applicationcore/interfaces/IUser';

export enum EUserActions{
    GetUsers = '[User] Get Users',
    GetUsersSuccess = '[User] Get Users Success',
    GetUser = '[User] Get User',
    GetUserSuccess = '[User] Get User Success'
}

export class GetUsers implements Action{
    public readonly type = EUserActions.GetUsers;
}

export class GetUsersSucess implements Action{
    public readonly type = EUserActions.GetUsersSuccess;
    constructor(public payload: IUser[]){}
}

export class GetUser implements Action{
    public readonly type = EUserActions.GetUser;
}

export class GetUserSucess implements Action{
    public readonly type = EUserActions.GetUserSuccess;

    constructor(public payload: IUser){}
}

export type UserActions = GetUser | GetUserSucess | GetUsers | GetUsersSucess;