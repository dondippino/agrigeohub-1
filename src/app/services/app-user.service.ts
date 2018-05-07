import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {AppUser} from '../services/models/app-user.model'
import {Observable} from 'rxjs/Observable';
import {ConfigService} from './config.service';

@Injectable()
export class AppUserService {

    constructor(private http: HttpClient, private config: ConfigService) {
    }
    add(body: AppUser): Observable<any> {
        var url = this.config.API_ENDPOINT + '/api/auth/signup/'
        return this.http.post(url, body, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        });
    }
    get(userId: string): Observable<any> {
        var url = this.config.API_ENDPOINT + `/api/getuser/${userId}/`
        return this.http.get(url, {
            headers: new HttpHeaders().set('Content-Type', 'application/json'),
        });
    }
    edit(body: AppUser): Observable<any> {
        var url = this.config.API_ENDPOINT + `/api/edit/user/`
        return this.http.patch(url, body);
    }
}
