import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardRoutingModule } from './dashboard-routing.module';
import { IndexComponent } from './index/index.component';
import { FormComponent } from './form/form.component';
import { FieldTypeComponent } from './field-type/field-type.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { DatetimepickerComponent } from '../applicationcore/fieldstypes/datetimepicker/datetimepicker.component';
import { DemoMaterialModule} from '../material-module';
import { EffectsModule } from '@ngrx/effects';
import { FormEffects } from '../store/effects/form.effects';
import { StoreModule } from '@ngrx/store';
import {formReducer}  from '../store/reducers/form.reducer';
import { SingleTextfieldComponent } from '../applicationcore/fieldstypes/single-textfield/single-textfield.component';
import { LayoutFormComponent } from '../applicationcore/fieldstypes/layout-form/layout-form.component';
import { FieldService } from '../applicationcore/services/field.service';
@NgModule({
  declarations: [IndexComponent, FormComponent, FieldTypeComponent, DatetimepickerComponent, SingleTextfieldComponent, LayoutFormComponent],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    DemoMaterialModule,
    DragDropModule,
    EffectsModule.forFeature([FormEffects]),
    StoreModule.forFeature('form', formReducer), 
  ],
  providers:[FieldService]
})
export class DashboardModule { }
