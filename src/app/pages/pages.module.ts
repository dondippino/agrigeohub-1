import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {CommonModule} from '@angular/common';

import {FormsModule} from '@angular/forms';
import {HttpModule} from '@angular/http';
import {PluginsModule} from '../plugins.component/plugins.module';
import {BlocksModule} from '../blocks/blocks.module';
import {HomeComponent} from './home/home';


@NgModule({
    imports: [
        PluginsModule, BlocksModule, BrowserModule, FormsModule, HttpModule, CommonModule
    ],
    declarations: [
        HomeComponent
    ],
    exports: [
        HomeComponent, BlocksModule
    ]
})
export class PagesModule {}
