import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class UserAuthService {

  constructor(public router: Router) { }

  isUserLoggedIn() {
    return sessionStorage.getItem('userSignedIn');
  }

  userLogOut() {
    sessionStorage.removeItem('userSignedIn');
    sessionStorage.removeItem('userDetails');
    this.router.navigate(['user-main']);
  }
}
