
import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PluginsModule} from '../plugins.component/plugins.module';
import {NavbarComponent} from './navbar/navbar';
import {FooterComponent} from './footer/footer';
import {SidebarComponent} from './sidebar/sidebar';
import {AppRoutingModule} from '../app-routing.module';
import {FormsModule} from '@angular/forms';

@NgModule({
    imports: [
        PluginsModule, AppRoutingModule, CommonModule, FormsModule
    ],
    declarations: [
        NavbarComponent, FooterComponent, SidebarComponent
    ],
    exports: [
        NavbarComponent, FooterComponent, SidebarComponent, CommonModule
    ]
})
export class BlocksModule {}
