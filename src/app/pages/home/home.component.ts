import {Component, ViewEncapsulation, OnInit, OnDestroy, AfterViewInit, ViewChild, ElementRef} from '@angular/core';
import {Router} from '@angular/router';
import {DomSanitizer, Title} from '@angular/platform-browser';
import {latLng} from 'leaflet';
import {tileLayer} from 'leaflet';
import * as shape from 'd3-shape';
import * as d3 from 'd3';

@Component({
    selector: 'home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
    encapsulation: ViewEncapsulation.Emulated

})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor() {

    }
    lineChartScheme = {
        name: 'coolthree',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#01579b', '#7aa3e5', '#a8385d', '#00bfa5'
        ]
    };

    comboBarScheme = {
        name: 'singleLightBlue',
        selectable: true,
        group: 'Ordinal',
        domain: [
            '#01579b'
        ]
    };
    // options
    showXAxis = true;
    showYAxis = true;
    gradient = false;
    showLegend = true;
    legendTitle = 'Legend';
    showXAxisLabel = true;
    tooltipDisabled = false;
    xAxisLabel = 'Country';
    showYAxisLabel = true;
    yAxisLabel = 'GDP Per Capita';
    showGridLines = true;
    innerPadding = '10%';
    barPadding = 8;
    groupPadding = 16;
    roundDomains = false;
    maxRadius = 10;
    minRadius = 3;
    showSeriesOnHover = true;
    roundEdges: boolean = true;
    animations: boolean = true;
    xScaleMin: any;
    xScaleMax: any;
    yScaleMin: number;
    yScaleMax: number;

    colorSets: any;
    colorScheme: any;
    schemeType: string = 'ordinal';
    selectedColorScheme: string;
    rangeFillOpacity: number = 0.15;
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
