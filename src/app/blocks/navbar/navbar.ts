import {Component, ViewChild, ViewEncapsulation, ElementRef, EventEmitter, Output, Input, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, SimpleChange} from '@angular/core';
import {Router, ActivatedRoute, GuardsCheckEnd} from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';

@Component({
    selector: 'navbar-block',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy, DoCheck {

    constructor(config: NgbDropdownConfig) {
        config.placement = 'bottom';
        config.autoClose = false;
    }
    ngOnInit() {
    }
    ngAfterViewInit() {
    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    }
    ngOnDestroy() {
    }
    ngDoCheck() {
    }
}
