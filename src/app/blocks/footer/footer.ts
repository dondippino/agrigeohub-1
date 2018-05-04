import {Component, ViewEncapsulation, ElementRef, ViewChild, AfterViewInit, OnInit} from '@angular/core';

@Component({
    selector: 'footer-block',
    templateUrl: './footer.html',
    styleUrls: ['./footer.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class FooterComponent implements AfterViewInit, OnInit {
    currentYear: number = new Date().getFullYear();
    constructor() {}
    ngOnInit() {}
    ngAfterViewInit() {

    }
}
