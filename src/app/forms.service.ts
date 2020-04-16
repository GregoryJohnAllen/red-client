import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { SignupComponent } from '../app/signup/signup.component';

@Injectable()
export class FormsService implements CanActivate {
  
  constructor(public signup: SignupComponent, public router: Router) {}
  canActivate(): boolean {
    if (this.signup.profiletype === "seeker" ) {
      // this.router.navigate(['/seekerform']);
      this.router.navigateByUrl('/seekerform')
      return true;
    } else if (this.signup.profiletype === "finder") {
      // this.router.navigate(['/finderform']);
      this.router.navigateByUrl('/finderform')
      return true;
    } else {
      return false;
    }
  }
}