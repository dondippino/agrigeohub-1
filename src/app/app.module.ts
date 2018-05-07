import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule, HTTP_INTERCEPTORS, } from '@angular/common/http';
import {NgxFormsService} from '@ngx-plus/ngx-forms'


import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {AppRoutingModule} from './app-routing.module';
import {AuthenticationService} from './services/auth.service';
import {TokenStorage} from './services/token-storage.service';
import {AuthenticationModule} from './services/auth.module';
import {ConfigService} from './services/config.service';
import {AppUserService} from './services/app-user.service';
import {AuthInterceptor} from './services/auth-interceptor.service';


import {PublicGuard, ProtectedGuard} from 'ngx-auth';
@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(), BrowserModule, PagesModule, AppRoutingModule, HttpClientModule, AuthenticationModule
    ],
    providers: [NgbDropdownConfig, NgxFormsService, AuthenticationService, TokenStorage, PublicGuard, ProtectedGuard, ConfigService, AppUserService, {
        provide: HTTP_INTERCEPTORS,
        useClass: AuthInterceptor,
        multi: true
    }],
    bootstrap: [AppComponent],
    exports: [AppRoutingModule, BrowserModule, NgbModule, PagesModule, HttpClientModule]
})
export class AppModule {}
