import { IFieldService } from '../interfaces/IFieldService';
import { IFormType } from '../interfaces/IFormType';
import { Injectable } from '@angular/core';

@Injectable()
export class FieldService implements IFieldService {

  public todo: IFormType[] = [];
  public done: IFormType[] = [];

  constructor() {

  }
}