import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

import {AppComponent} from './app.component';
import {PagesModule} from './pages/pages.module';
import {AppRoutingModule} from './app-routing.module';

@NgModule({
    declarations: [
        AppComponent
    ],
    imports: [
        NgbModule.forRoot(), BrowserModule, PagesModule, AppRoutingModule, HttpClientModule
    ],
    providers: [NgbDropdownConfig],
    bootstrap: [AppComponent],
    exports: [AppRoutingModule, NgbModule]
})
export class AppModule {}
