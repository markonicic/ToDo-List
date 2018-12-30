import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Injectable } from '@angular/core';
import { LoginService } from './login.service';
import { Observable } from 'rxjs';

@Injectable()
export class CanActivateTodos implements CanActivate {

  constructor(private login: LoginService, private router: Router) {}

  // controling access of page /todos
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
    ): Observable<any>|any {
    if (this.login.token) {
      return true;
    }
    this.router.navigate(['/login']);
      return false;
  }
}
