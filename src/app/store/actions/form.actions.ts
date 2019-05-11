import { Action } from '@ngrx/store';
import { IFormType } from '../../applicationcore/interfaces/IFormType';

export enum EFormActions{
    GetFormsType = '[FormType] Request Load Form Types',   
    GetFormsTypeLoadSuccess = '[FormType] Loaded Successfuly Form Types'
}

export class GetFormsType implements Action{
    public readonly type = EFormActions.GetFormsType;
}

export class LoadedSuccessfulGetFormsType implements Action {
    public readonly type = EFormActions.GetFormsTypeLoadSuccess;

    constructor(public payload: IFormType[]){}
}

export type FormActions = GetFormsType | LoadedSuccessfulGetFormsType;