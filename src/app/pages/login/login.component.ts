import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {AuthenticationService} from '../../services/auth.service';
import {ConfigService} from '../../services/config.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

    constructor(private authService: AuthenticationService, private router: Router, public config: ConfigService) {}

    ngOnInit() {
    }
    credentials: Object = {
        "username": "",
        "password": ""
    }
    login() {
        this.authService.login(this.config.API_ENDPOINT + '/api/auth/login/', this.credentials).subscribe((data) => {
            this.router.navigateByUrl('/admin/dashboard');
        }, () => {})
    }


}
