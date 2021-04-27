import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuthService {

  constructor(public router: Router) { }

  isEmployeeLoggedIn() {
    return sessionStorage.getItem('employeeSignedIn');
  }

  employeeLogOut() {
    sessionStorage.removeItem('employeeSignedIn');
    sessionStorage.removeItem('employeeDetails');
    this.router.navigate(['employee-main']);
  }
}
