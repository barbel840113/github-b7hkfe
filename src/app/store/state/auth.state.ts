import { IAuth } from '../../applicationcore/interfaces/IAuth';
 
export interface IAuthState{
     auth: IAuth;
}

export const initializeAuthState: IAuthState = {
    auth : null
};
