import { Action } from '@ngrx/store';
import { IFormTypeState, initialFormTypeState } from '../state/formtype.state';
import { EFormActions, FormActions } from '../actions/form.actions';


export function formReducer(state = initialFormTypeState, action: FormActions): IFormTypeState {
  switch (action.type) {

    case EFormActions.GetFormsType: {

      return {
        ...state
      }
      break;
    }

    case EFormActions.GetFormsTypeLoadSuccess: {
      return {
        ...state,
        formtype: action.payload
      }
    }

    default:
      return state;
  }
}
