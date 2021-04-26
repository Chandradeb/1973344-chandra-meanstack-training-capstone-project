import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AdminAuthService } from '../services/admin-auth.service';

@Injectable({
  providedIn: 'root'
})

export class AdminAuthGuard implements CanActivate {

  constructor(private router: Router,
    private admin_auth: AdminAuthService) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
    
    if(this.admin_auth.isAdminLoggedIn()) {
      return true;
    } 
    
    this.router.navigate(['/admin-main'])
    return false;
  }
  
}
