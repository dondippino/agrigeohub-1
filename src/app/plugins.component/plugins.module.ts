import {NgModule} from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {NgbdAccordionBasic} from './accordion/accordion-basic'
import {NgbdDropdownBasic} from './dropdown/dropdown-basic'
import {LeafletModule} from '@asymmetrik/ngx-leaflet';

@NgModule({
    imports: [
        NgbModule, LeafletModule
    ],
    declarations: [
        NgbdAccordionBasic, NgbdDropdownBasic
    ],
    exports: [
        NgbdAccordionBasic, NgbdDropdownBasic, NgbModule, LeafletModule
    ]
})
export class PluginsModule {}
