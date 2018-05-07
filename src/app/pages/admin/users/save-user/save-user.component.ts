import {Component, OnInit, ChangeDetectionStrategy} from '@angular/core';
import {Router, RouterStateSnapshot, ActivatedRoute} from '@angular/router';
import {NgxFormConfig} from '@ngx-plus/ngx-forms'
import {AppUser} from '../../../../services/models/app-user.model'
import {AppUserService} from '../../../../services/app-user.service'


@Component({
    selector: 'app-save-user',
    templateUrl: './save-user.component.html',
    styleUrls: ['./save-user.component.css'],
    changeDetection: ChangeDetectionStrategy.Default
})
export class SaveUserComponent implements OnInit {

    constructor(private appUserService: AppUserService, private router: Router, private route: ActivatedRoute) {

    }
    isEdit: boolean = false;
    appUser: AppUser = new AppUser();
    ngOnInit() {
        this.route.params.subscribe(params => {
            if (params['userId'] !== undefined) {
                this.appUserService.get(params.userId).subscribe(appUserObject => {
                    this.isEdit = true;
                    this.appUser = Object.assign(new AppUser(), appUserObject.results);
                });
            }
        });
    }

    public formConfig: NgxFormConfig = {
        title: 'Fill in the appropriate information',
        icon: 'fa fa-tasks',
        fields: {
            username: {
                type: 'input',
                label: 'Username',
                placeholder: 'Specify a username',
            },
            email: {
                type: 'email',
                label: 'Email',
                placeholder: 'Enter email',
            },
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
            password: {
                type: 'password',
                label: 'Password',
                placeholder: 'Enter Password',
                hidden: this.isEdit ? true : false

            },
            confirm_password: {
                type: 'password',
                label: 'Confirm Password',
                placeholder: 'Confirm  Password',
                hidden: this.isEdit ? true : false

            },
            address: {
                type: 'textarea',
                label: 'Home Address',
                placeholder: 'Address 1 (Home Address)',
                rows: 5
            },
            work_address: {
                type: 'textarea',
                label: 'Work Address',
                placeholder: 'Address 2 (Work Address)'
            },
            phone_number: {
                type: 'input',
                label: 'State / Province',
                placeholder: 'State / Province'
            }

        },
        buttons: [{
            label: 'Save',
            type: 'submit',
            classNames: 'btn-primary',
            click: {type: 'submit'},
        }],
    }
    handleAction(event) {
        this.appUser = Object.assign(new AppUser(), event.payload);
        if (this.isEdit) {
            this.appUserService.add(event.payload).subscribe((data) => {
                console.log(data)
            }, () => {

            });
        } else {
            this.appUserService.add(this.appUser).subscribe((data) => {
                console.log(data)
            }, () => {

            });
        }
    }
}
