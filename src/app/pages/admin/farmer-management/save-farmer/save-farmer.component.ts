import {Component, OnInit} from '@angular/core';
import {NgxFormConfig} from '@ngx-plus/ngx-forms'

@Component({
    selector: 'app-save-farmer',
    templateUrl: './save-farmer.component.html',
    styleUrls: ['./save-farmer.component.css']
})
export class SaveFarmerComponent implements OnInit {

    constructor() {}
    public item: any = {};
    public formConfig: NgxFormConfig = {
        title: 'Fill in the appropriate information',
        icon: 'fa fa-tasks',
        fields: {
            first_name: {
                type: 'input',
                label: 'First Name',
                placeholder: 'First Name',
            }
            ,

            last_name: {
                type: 'input',
                label: 'Last Name',
                placeholder: 'Last Name',
            },
            date_of_birth: {
                type: 'date',
                label: 'Date of Birth'

            },
            nationality: {
                type: 'input',
                label: 'Nationality',
                placeholder: 'Nationality'
            },
            address_1: {
                type: 'textarea',
                label: 'Nationality',
                placeholder: 'Address 1 (Home Address)'
            },
            address_2: {
                type: 'textarea',
                label: 'Nationality',
                placeholder: 'Address 2 (Work Address)'
            },
            state_province: {
                type: 'input',
                label: 'State / Province',
                placeholder: 'State / Province'
            },
            lga_county: {
                type: 'input',
                label: 'LGA / County',
                placeholder: 'LGA / County'
            },

            country: {
                type: 'input',
                label: 'Country',
                placeholder: 'Country'
            },

            bvn_passport: {
                type: 'input',
                label: 'BVN / International Passport ID',
                placeholder: 'BVN / International Passport ID'
            },
            selectOptions: {
                type: 'select',
                label: "Specialty (eg. Crops/Poultry/Fishery,etc.)",
                options: [
                    {label: "Crop Farming", value: "crops"},
                    {label: "Poultry", value: "poultry"},
                    {label: "Fishery", value: "fishery"},
                    {label: "Other", value: "fishery"},
                ],
            }

        },
        buttons: [{
            label: 'Save',
            type: 'submit',
            classNames: 'btn-primary',
            click: {type: 'submit'},
        }],
    }
    public handleAction($event) {
        console.log('$event', $event)
    }
    ngOnInit() {
    }

}
