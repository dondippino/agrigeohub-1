
import {Component, ViewEncapsulation, ViewChild, ElementRef, OnInit, AfterViewInit, OnDestroy, ChangeDetectionStrategy} from '@angular/core';
import {Title} from '@angular/platform-browser';


@Component({
    selector: 'admin',
    templateUrl: './admin.html',
    styleUrls: ['./admin.css'],
    encapsulation: ViewEncapsulation.Emulated,
    changeDetection: ChangeDetectionStrategy.Default
})

export class AdminComponent implements OnInit, AfterViewInit, OnDestroy {
    constructor(private titleService: Title) {

    }
    ngOnInit() {
        this.titleService.setTitle("AlgroHub ");
    }

    ngAfterViewInit() {

    }
    ngOnDestroy() {
    }

    @ViewChild('sideContent') sideContent: ElementRef;
    private _opened: boolean = false;

    private _toggleSidebar() {
        this._opened = !this._opened;
    }
    toggleSidebar() {

    }
    catchOpenedChange(event: any) {

    }
}
