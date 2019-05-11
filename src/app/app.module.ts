import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import * as fromUiStore from './store/reducers';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StoreRouterConnectingModule } from '@ngrx/router-store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../environments/environment';
import { UiNavBarComponent } from './ui-nav-bar/ui-nav-bar.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatSidenavModule, MatIconModule, MatListModule } from '@angular/material';
import { AuthService } from './applicationcore/services/auth.service';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientXsrfModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService} from './infrastructure/services/in-memory-data.service';
import { HttpErrorHandler }from './infrastructure/services/http-error-handler.service';
import { MessageService} from './applicationcore/services/message.service';
import { RequestCache, RequestCacheWithMap } from './infrastructure/services/request-cache.service';
import { httpInterceptorProviders } from './infrastructure/http-interceptors/index';
import { FormService } from './applicationcore/services/form.service';
import { DashboardModule } from './dashboard/dashboard.module';
import { EffectsModule } from '@ngrx/effects';
import { AuthenticateEffects } from './store/effects/authenticate.effects';
import { FlexLayoutModule } from "@angular/flex-layout";

@NgModule({
  declarations: [
    AppComponent,
    UiNavBarComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    // Http ClientModule after BrowserModule
    HttpClientXsrfModule.withOptions({
      cookieName: 'My-Xsrf-Cookie',
      headerName: 'My-Xsrf-Header',
    }),

    AppRoutingModule,     
    StoreModule.forRoot(fromUiStore.appReducers),
    BrowserAnimationsModule,
    StoreRouterConnectingModule.forRoot({ stateKey: 'router' }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    FlexLayoutModule,
    MatIconModule,
    MatListModule,
    EffectsModule.forRoot([AuthenticateEffects]),
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, {
        dataEncapsulation: false,
        passThruUnknownUrl: true,
        put204: false // return entity after PUT/update
      }
    )
  ],
  providers: [
    AuthService,
    MessageService,
    HttpErrorHandler,
    MessageService,
    FormService,
    { provide: RequestCache, useClass: RequestCacheWithMap },
    httpInterceptorProviders
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule { }
