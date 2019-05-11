import { createSelector } from '@ngrx/store';

import { IAppState } from '../state/app.state';
import { IFormTypeState } from '../state/formtype.state';

export const selectFormType = (state: IAppState) => state.form;

export const selectFormTypesList = createSelector(
    selectFormType,
    (state: IFormTypeState) => state.formtype
);
