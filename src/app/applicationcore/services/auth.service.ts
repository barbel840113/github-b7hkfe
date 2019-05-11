import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';


import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

import { Form } from '../interfaces/Form';
import { HttpErrorHandler, HandleError } from '../../infrastructure/services/http-error-handler.service';

/** Mock client-side authentication/authorization service */
@Injectable()
export class AuthService {

  authUrl = 'api/auth';  // URL to web api
  private handleError: HandleError;
  
  constructor(
    private http: HttpClient,
    httpErrorHandler: HttpErrorHandler) {
    this.handleError = httpErrorHandler.createHandleError('FormsService');
  }

  /** Get boolean value if user is authenticated */
  getLoggedToken() : string{
    return "";
  }

  /** GET heroes from the server */
  getAuthorizationToken(): Observable<any> {
    return this.http.get<any>(this.authUrl)
      .pipe(
        catchError(this.handleError('getHeroes', []))
      );
  }
}