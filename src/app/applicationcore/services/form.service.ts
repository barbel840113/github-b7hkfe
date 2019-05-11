import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Form } from '../interfaces/Form';
import { IFormType } from '../interfaces/IFormType';
import { HttpErrorHandler, HandleError } from '../../infrastructure/services/http-error-handler.service';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':  'application/json',
    'Authorization': 'my-auth-token'
  })
};

@Injectable()
export class FormService {
  formsUrl = 'api/forms';  // URL to web api
  formsTypeURL = 'api/formsType'; // URL for form Types
  private handleError: HandleError;

  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FormsService');
  }

  /** GET heroes from the server */
  getForms (): Observable<Form[]> {
    return this.http.get<Form[]>(this.formsUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }

  /**Get All Forms Type */
  getFormsType (): Observable<IFormType[]> {
    return this.http.get<IFormType[]>(this.formsTypeURL)
      .pipe(
        catchError(this.handleError('getFormsTypes', []))
      );
  }

  /* GET heroes whose name contains search term */
  searchForm(term: string): Observable<Form[]> {
    term = term.trim();

    // Add safe, URL encoded search parameter if there is a search term
    const options = term ?
     { params: new HttpParams().set('name', term) } : {};

    return this.http.get<Form[]>(this.formsUrl, options)
      .pipe(
        catchError(this.handleError<Form[]>('searchHeroes', []))
      );
  }

  //////// Save methods //////////

  /** POST: add a new hero to the database */
  addForm (hero: Form): Observable<Form> {
    return this.http.post<Form>(this.formsUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('addHero', hero))
      );
  }

  /** DELETE: delete the hero from the server */
  deleteForm (id: number): Observable<{}> {
    const url = `${this.formsUrl}/${id}`; // DELETE api/heroes/42
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError('deleteHero'))
      );
  }

  /** PUT: update the hero on the server. Returns the updated hero upon success. */
  updateForm (hero: Form): Observable<Form> {
    httpOptions.headers =
      httpOptions.headers.set('Authorization', 'my-new-auth-token');

    return this.http.put<Form>(this.formsUrl, hero, httpOptions)
      .pipe(
        catchError(this.handleError('updateHero', hero))
      );
  }
}


