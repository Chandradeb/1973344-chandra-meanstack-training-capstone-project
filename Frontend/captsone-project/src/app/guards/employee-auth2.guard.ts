import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { EmployeeAuthService } from '../services/employee-auth.service';

@Injectable({
  providedIn: 'root'
})
export class EmployeeAuth2Guard implements CanActivate {
  constructor(
    private router: Router,
    private employee_auth: EmployeeAuthService
  ) {}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      if(this.employee_auth.isEmployeeLoggedIn()) {
        return false;
      } else{
        return true;
      }
  }
  
}
