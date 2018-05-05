import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdAccordionBasic} from './accordion/accordion-basic'
import {NgbdDropdownBasic} from './dropdown/dropdown-basic'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgxChartsModule} from "@swimlane/ngx-charts"
import {DatatablesModule} from '@spacebar/ngx-datatables';
import {NgxFormsModule} from '@ngx-plus/ngx-forms'
//import {NgxSidebarModule} from 'ngx-sidebar';
import {SidebarModule} from 'ng-sidebar';
import {IconsModule} from '../icons.module';

@NgModule({
    imports: [
        NgbModule, LeafletModule, NgxChartsModule, DatatablesModule, SidebarModule, IconsModule, NgxFormsModule
    ],
    declarations: [
        NgbdAccordionBasic, NgbdDropdownBasic
    ],
    exports: [
        NgbdAccordionBasic, NgbdDropdownBasic, NgbModule, LeafletModule, NgxChartsModule, DatatablesModule, SidebarModule, IconsModule, NgxFormsModule
    ]
})
export class PluginsModule {}
