import { IFormType } from '../../applicationcore/interfaces/IFormType';

export interface IFormTypeState {
    formtype: IFormType[]
  }
  
  export const initialFormTypeState: IFormTypeState = {
    formtype: null
  };