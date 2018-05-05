import { Component, ViewEncapsulation, Input, OnInit} from '@angular/core';

@Component({
    selector: 'sidebar-block',
    templateUrl: './sidebar.html',
    styleUrls: ['./sidebar.css'],
    encapsulation: ViewEncapsulation.Emulated
})
export class SidebarComponent implements OnInit {
    @Input() showTopNav: boolean;
    topNav: boolean;
    constructor() {
    }
    ngOnInit() {
        this.topNav = this.showTopNav;
    }
}
