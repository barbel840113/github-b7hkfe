import { IUser} from '../../applicationcore/interfaces/IUser';
 
export interface IUserState{
     users: IUser[];
}

export const initializeUserState: IUserState = {
    users : null
};
