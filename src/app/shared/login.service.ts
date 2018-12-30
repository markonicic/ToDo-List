import { Injectable } from '@angular/core';
import { Observable, pipe } from 'rxjs';
import { tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  token: string;

  constructor(private http: HttpClient) {}

  // login service method
  login(
    user: string,
    pass: string
  ): Observable<{ token_type: string; token: string }> {
    return this.http
      .post<{ token_type: string; token: string }>(
        'http://todo.digitalcube.rs/user/login',
        null,
        { params: { username: user, password: pass } }
      )
      .pipe(
        tap(res => {
          this.token = res.token;
          console.log('token', res.token);
        })
      );
  }

  // logout service method
  logOut(): Observable<Object> {
    return this.http.post('http://todo.digitalcube.rs/user/logout', null);
  }
}
