import {Component, ViewEncapsulation, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {latLng} from 'leaflet';
import {tileLayer} from 'leaflet';
@Component({
    selector: 'home',
    templateUrl: './home.html',
    styleUrls: ['./home.css'],
    encapsulation: ViewEncapsulation.Emulated

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor() {

    }
    ngOnInit() {

    }
    ngAfterViewInit() {

    }
    ngOnDestroy() {

    }
    leafletOptions = {
        layers: [
            tileLayer('http://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {maxZoom: 18, attribution: '...'})
        ],
        zoom: 5,
        center: latLng(46.879966, -121.726909)
    };
}
