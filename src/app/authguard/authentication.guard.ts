import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from '../services/login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationGuard implements CanActivate,CanActivateChild {
  constructor(private _loginService: LoginService, private _route: Router) { }
  canActivateChild() {
    if (this._loginService.isLogedIn()) {
      return true;
    }
    this._route.navigate(['/login']);
    return false;
  }
  canActivate() {
    if (this._loginService.isLogedIn()) {
      return true
    }
    this._route.navigate(['/login']);
    return false;
  }
  
}
