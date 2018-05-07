import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdAccordionBasic} from './accordion/accordion-basic'
import {NgbdDropdownBasic} from './dropdown/dropdown-basic'
import {NgbdModalBasic} from './modal/modal-basic'
import {LeafletMap} from './leaflet-map/leaflet-map'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';
import {NgxChartsModule} from "@swimlane/ngx-charts"
import {DatatablesModule} from '@spacebar/ngx-datatables';
import {NgxFormsModule} from '@ngx-plus/ngx-forms'
import {UploadxModule} from 'ngx-uploadx';
import {SidebarModule} from 'ng-sidebar';
import {IconsModule} from '../icons.module';
import {ReactiveFormsModule} from '@angular/forms';
//import {} from '@ngx-formly/';
//import {FormlyBootstrapModule} from '@ngx-formly/bootstrap';

@NgModule({
    imports: [
        NgbModule, LeafletModule, NgxChartsModule, DatatablesModule, SidebarModule, IconsModule, NgxFormsModule, UploadxModule
    ],
    declarations: [
        NgbdAccordionBasic, NgbdDropdownBasic, NgbdModalBasic, LeafletMap
    ],
    exports: [
        NgbdAccordionBasic, NgbdDropdownBasic, NgbdModalBasic, NgbModule, LeafletModule, NgxChartsModule, DatatablesModule, SidebarModule, IconsModule, NgxFormsModule, UploadxModule, LeafletMap
    ]
})
export class PluginsModule {}
