import { Injectable } from '@angular/core';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Router } from '@angular/router';

@Injectable()
export class AuthService {
  constructor(public jwtHelper: JwtHelperService, public router:Router) {}
  // ...
  public isAuthenticated(): boolean {
    const token = localStorage.getItem('token');
    // Check whether the token is expired and return
    // true or false
    return !this.jwtHelper.isTokenExpired(token);

  }

  loggedIn() {
    return !!localStorage.getItem('token');
  }

logoutUser(){
  localStorage.removeItem('token')
  localStorage.removeItem('profiletype')
  this.router.navigate([''])
}

}