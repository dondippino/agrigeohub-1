import {Component, Input} from '@angular/core';
import {Layer} from 'leaflet';

@Component({
    selector: 'leaflet-map',
    template: `
        <div class="map"  
        leaflet 
        [leafletOptions]="leafletOptions" 
        [leafletLayers]="layers"
        ></div>
  `,
    styles: [
        `.map{
             min-height: 40em;
            }
        
        `
    ]
})
export class LeafletMap {

    constructor() {}
    @Input() leafletOptions: Object;
    @Input() layers: Layer[];
}
