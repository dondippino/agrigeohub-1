import {Observable} from 'rxjs/Observable';
import {Injectable} from '@angular/core';
import {HttpEvent, HttpInterceptor, HttpHandler, HttpRequest, HttpHeaders} from '@angular/common/http';

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        if (localStorage.getItem('accessToken') != undefined && localStorage.getItem('refreshToken') != undefined) {
            return next.handle(req.clone({
                setHeaders: {
                    'Authorization': `token ${localStorage.getItem('accessToken')}`,
                    'Content-Type': 'application/json'
                }
            }));
        }
        else {
            return next.handle(req);
        }

    }
}