import {Component, ViewChild, ViewEncapsulation, ElementRef, EventEmitter, Output, Input, OnInit, OnChanges, OnDestroy, DoCheck, AfterViewInit, SimpleChange} from '@angular/core';
import {Router, ActivatedRoute, GuardsCheckEnd} from '@angular/router';
import {NgbDropdownConfig} from '@ng-bootstrap/ng-bootstrap';
import {AuthenticationService} from '../../services/auth.service';


@Component({
    selector: 'navbar-block',
    templateUrl: './navbar.html',
    styleUrls: ['./navbar.css']
})
export class NavbarComponent implements OnInit, AfterViewInit, OnChanges, OnDestroy, DoCheck {

    constructor(config: NgbDropdownConfig, private authService: AuthenticationService) {
        config.placement = 'bottom';
        config.autoClose = false;
    }
    isAuthorized: boolean = false;
    ngOnInit() {
    }
    ngAfterViewInit() {
        this.authService.isAuthorized().subscribe(bool => {this.isAuthorized = bool});
    }
    ngOnChanges(changes: {[propKey: string]: SimpleChange}) {
    }
    ngOnDestroy() {
    }
    ngDoCheck() {
    }
    logout() {
        this.authService.logout();
    }
}
