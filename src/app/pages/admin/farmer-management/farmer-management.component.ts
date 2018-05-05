import {Component, OnInit} from '@angular/core';
import * as $ from 'jquery';
@Component({
    selector: 'app-farmer-management',
    templateUrl: './farmer-management.component.html',
    styleUrls: ['./farmer-management.component.css']
})
export class FarmerManagementComponent implements OnInit {

    constructor() {
        const data = [
            ["Tiger Nixon", "System Architect", "Edinburgh", "5421", "2011/04/25", "$320,800"],
            ["Garrett Winters", "Accountant", "Tokyo", "8422", "2011/07/25", "$170,750"],
            ["Ashton Cox", "Junior Technical Author", "San Francisco", "1562", "2009/01/12", "$86,000"],
            ["Cedric Kelly", "Senior Javascript Developer", "Edinburgh", "6224", "2012/03/29", "$433,060"],
            ["Airi Satou", "Accountant", "Tokyo", "5407", "2008/11/28", "$162,700"]
        ];
        //simulation of an ajax call
        this.ajax = (dtData: any, callback, settings) => {
            setTimeout(() => {
                callback({
                    "draw": dtData.draw,
                    "recordsTotal": 57,
                    "recordsFiltered": 57,
                    data: data
                });
            }, 200);
        };
    }
    data: Object[] = [
        ['Tiger Nixon', 'System Architect'],
        ['Garrett Winters', 'Accountant'],
        //        ['Ashton Cox', 'Junior Technical Author'],
        //        ['Cedric Kelly', 'Senior Javascript Developer'],
        //        ['Airi Satou', 'Accountant', 'Tokyo']
    ];
    options: DataTables.Settings = {
        lengthChange: false
    };
    ajax: DataTables.FunctionAjax;

    ngOnInit() {
    }


}
