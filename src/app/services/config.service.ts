import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';


@Injectable()
export class ConfigService {

    constructor(private http: HttpClient) {}

    public API_ENDPOINT = 'http://keki.herokuapp.com';


}


