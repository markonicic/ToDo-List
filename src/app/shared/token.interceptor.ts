import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(public login: LoginService) {}

  // intercepting token in request
  intercept(
    request: HttpRequest<any>,
    next: HttpHandler
  ): Observable<HttpEvent<any>> {
    if (!this.login.token) {
      return next.handle(request);
    }
    request = request.clone({
      setHeaders: {
        authorization: this.login.token
      }
    });
    return next.handle(request);
  }
}
